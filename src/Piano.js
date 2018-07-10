import React from 'react';
import Keyboard from './Components/Keyboard';
import './SCSS/Piano.scss';
import './SCSS/CustomSlider.scss';
import soundPreset1 from './soundData/soundList.js'
//


//Declare consts
const soundPreset1Id = 'classic';
const soundPreset2Id = 'samples';
const soundPreset1Name = 'Piano';
const soundPreset2Name = 'Samples';

let soundPreset2 = [];


class Piano extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { 
			display: soundPreset1Name,
			currentSoundPreset: soundPreset1,
			currentSoundPresetId: soundPreset1Id,
            soundDataIsFetched: false,
			sliderVal: 0.3
		};
		this.displayNoteName = this.displayNoteName.bind(this);
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
	displayNoteName(name) {
		 
			this.setState({
				display: name
			});
		 
	}
	adjustVolume(e) {
		 
			this.setState({
				sliderVal: e.target.value,
				display: "Volume: " + Math.round(e.target.value * 100)
			});
			setTimeout( () => this.clearDisplay(), 1000);
		 
	}
	clearDisplay() {
		this.setState({
			display: String.fromCharCode(160)
		});
	}
	render() { 
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
                            updateDisplay={this.displayNoteName}
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
