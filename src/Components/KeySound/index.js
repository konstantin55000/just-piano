import React from 'react'; 
class KeySound extends React.Component {
	constructor(props) {
		super(props); 
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	 
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	handleKeyPress(e) {
		if (e.keyCode === this.props.keyCode) {
			this.playSound();
		}
	} 
	playSound(e) {
		const sound = document.getElementById(this.props.keyTrigger);
		sound.currentTime = 0;
		sound.play();
		 
		this.props.updateDisplay(this.props.noteId.replace('-', ' '));
	}
	render() {
        
        let classNames = "piano-key";
        console.log('sharpness', this.props.sharp);
        if (this.props.sharp) { classNames = ' black'}; 
        
		return (
		 <li> 
				<div id={this.props.noteId} 
					 onClick={this.playSound} 
					 className={classNames} 
					   >
                     
					<audio className='note' id={this.props.keyTrigger} src={this.props.note}></audio>
	    			{this.props.keyTrigger}
				</div>
			</li>
		)
	}
}

export default KeySound;	