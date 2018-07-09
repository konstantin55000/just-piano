import React from 'react';
import KeySound from './KeySound'

class  Keyboard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		 
            let currUrl = '#'; 
			const keyboard = this.props.currentSoundPreset.map( (obj, i, soundProps) => { 
				return (
					<KeySound 
						noteId={soundProps[i].id} 
						note={soundProps[i].url}
						keyTrigger={soundProps[i].keyTrigger}
						keyCode={soundProps[i].keyCode} 
						updateDisplay={this.props.updateDisplay} 
						power={this.props.power} 
                        sharp={soundProps[i].sharp}
                    />
				)
			})  
		return (
			<div className="keys" >
				{keyboard}
			</div>
		)
	}
}

export default Keyboard;