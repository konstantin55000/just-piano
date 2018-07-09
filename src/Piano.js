import React from 'react';
import Keyboard from './Components/Keyboard';
import './SCSS/Piano.scss';
import './SCSS/CustomSlider.scss';

//


//Declare consts 
const soundPreset1Id = 'classic';
const soundPreset2Id = 'samples';
const soundPreset1Name = 'Piano';
const soundPreset2Name = 'Samples';

const soundPreset1 = [

    {keyCode: 65, keyTrigger: 'A', id: 'C', url: './medias/261-D.mp3'},
	{keyCode: 87, keyTrigger: 'W', id: 'C#', sharp: true, url: './medias/277-C-sharp.mp3'},
	{keyCode: 83, keyTrigger: 'S', id: 'D', url: './medias/293-D.mp3'},
	{keyCode: 69, keyTrigger: 'E', id: 'D #', sharp: true, url: './medias/311-D-sharp.mp3'},
    //D keytriger 68
    {keyCode: 68, keyTrigger: 'D', id: 'E ', url: './medias/329-E.mp3 '},
	{keyCode: 70, keyTrigger: 'F', id: 'F', url: './medias/349-F.mp3'}, 
	{keyCode: 82, keyTrigger: 'R', id: 'F#', sharp: true, url: './medias/369F-sharp.mp3'},    
    {keyCode: 71, keyTrigger: 'G', id: 'G', url: './medias/391-G.mp3'},
	{keyCode: 84, keyTrigger: 'T', id: 'G# ', sharp: true, url: './medias/415-G-sharp.mp3'}, 
    {keyCode: 72, keyTrigger: 'H', id: 'A ',  url: './medias/880-A.mp3'},
    {keyCode: 89, keyTrigger: 'Y', id: 'A# ', sharp: true, url: './medias/932-A-sharp.mp3'},
    {keyCode: 74, keyTrigger: 'J', id: 'B ',  url: './medias/987-B.mp3'},
    {keyCode: 75, keyTrigger: 'K', id: 'C ',   url: './medias/1046-C.mp3'},
	 
];

const soundPreset2 = [
	
];


class Piano extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			display: soundPreset1Name,
			currentSoundPreset: soundPreset1,
			currentSoundPresetId: soundPreset1Id,
			sliderVal: 0.3
		}
		this.displaynoteName = this.displaynoteName.bind(this);
		this.selectPreset = this.selectPreset.bind(this);
		this.adjustVolume = this.adjustVolume.bind(this);
		this.clearDisplay = this.clearDisplay.bind(this);
	} 
	selectPreset() {
		 
			this.state.currentSoundPresetId ===  soundPreset1Id ?
			this.setState({
				currentSoundPreset: soundPreset2,
				display:  soundPreset2Name,
				currentSoundPresetId: soundPreset2Id,
			}) :
			this.setState({
				currentSoundPreset: soundPreset1,
				display: soundPreset1Name,
				currentSoundPresetId: soundPreset1Id,
			});
		 
	}
	displaynoteName(name) {
		if (this.state.power) { 
			this.setState({
				display: name
			});
		}
	}
	adjustVolume(e) {
		if (this.state.power) {
			this.setState({
				sliderVal: e.target.value,
				display: "Volume: " + Math.round(e.target.value * 100)
			});
			setTimeout( () => this.clearDisplay(), 1000);
		}
	}
	clearDisplay() {
		this.setState({
			display: String.fromCharCode(160)
		});
	}
	render() {
		const powerSlider = this.state.power ? { float: 'right' } : { float: 'left' };
	    const presetSlider = this.state.currentSoundPresetId === soundPreset1Id ? { float: 'left' } : { float: 'right' };
		{
			document.querySelectorAll('.note').forEach(sound => {
				sound.volume = this.state.sliderVal
			});
	    }
    return (
			<div className="inner-container">
                <div id="p-wrapper">
                    <ul id="piano">
                        <Keyboard  	
                            power={this.state.power}
                            updateDisplay={this.displaynoteName}
                            noteVolume={this.state.sliderVal}
                            currentSoundPreset={this.state.currentSoundPreset} />
                       
                        <div className="controls-container">
                            
                            <p className="screen">
                                {this.state.display}
                            </p>
                            <div className="volume-slider">
                                <input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
                            </div>
                            <div className="control">
                                <p>Choose sound: </p>
                                <div onClick={this.selectPreset} className="select">
                                    <div style={presetSlider} className="inner" />
                                </div>
                            </div>
                        </div>
                        </ul>
                </div>
			</div>
    	)
  	}
}

export default Piano;