import React from 'react';
import KeySound from './KeySound'

function  Keyboard   (props) {
			const keyboard =  props.currentSoundPreset.map( (obj, i, soundProps) => {
				return (
					<KeySound key={soundProps[i].id}
						noteId={soundProps[i].id}
						note={soundProps[i].url}
						keyTrigger={soundProps[i].keyTrigger}
						keyCode={soundProps[i].keyCode}
						updateDisplay={props.updateDisplay} 
						power={props.power}
                        sharp={soundProps[i].sharp}
                    />
				)
			});
		return (
			<div className="keys" >
				{keyboard}
			</div>
		)
}

export default Keyboard;
