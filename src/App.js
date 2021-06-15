import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import EmojiGrid from './components/EmojiGrid';
import bandage from './images/head-bandage.png';
import sneeze from './images/sneezing-face.png';
import nauseated from './images/nauseated-face.png';
import mask from './images/mask.png';
import thermometer from './images/thermometer.png';
import vomiting from './images/face-vomiting.png';
import smile from './images/smiling-face.png';
import slightSmile from './images/slight-smile.png';
import neutralFace from './images/neutral-face.png';
import slightFrown from './images/slight-frown.png';
import frown from './images/frowning-face.png';
import crying from './images/crying-face.png';
import knife from './images/knife.png';
import hammer from './images/hammer.png';
import fire from './images/fire.png';
import electricity from './images/electric.png';
import Slider from 'react-input-slider';

function App() {

  const [selections, setSelections] = useState({
    sick: null,
    standard: null,
    pain: null,
    verbal: null,
    visual: null,
    numerical: 0
  })
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(event) {
    const { name, id } = event.target;
    console.log(event.target)
    setSelections(prevValue => {
      return {
        ...prevValue,
        [name]: id
      }
    })
  }

  function submit() {
    let finished = true
    for (const [key, value] of Object.entries(selections)) {
      console.log(value)
      if (value === null) {
        setErrorMessage("Form is incomplete")
        finished = false
        break
      }
    }
    if (finished) {
      setErrorMessage("")
    }
  }

  return (
    <div className="App container" style={{textAlign: "center"}}>
    <div className="row justify-content-center">
      <Box className="col-md-6" description="Sick" color="#fcd409">
        <EmojiGrid set="sick" handleChange={handleChange} emojis={[[bandage, "bandage"], [sneeze, "sneeze"], [nauseated, "naueseated"], [mask, "mask"], [thermometer, "thermometer"], [vomiting, "vomiting"]]} />
      </Box>
    
      <Box className="col-md-6" description="Standard Set" color="#0c7ffa">
        <EmojiGrid set="standard" handleChange={handleChange} emojis={[[smile, "smile"], [slightSmile, "slightSmile"], [neutralFace, "neutralFace"], [slightFrown, "slightFrown"], [frown, "frown"], [crying, "crying"]]} />
      </Box>
    </div>
    <div className="row justify-content-center">
      <Box className="col-md-6" description="Pain Quality" color="#94de19">
        <br />
        <div className="row">
          <div className="col col-3 d-flex justify-content-center">
            <img name="pain" className="press emoji" src={knife} id="knife" onClick={handleChange} />
          </div>
          <div className="col col-3 d-flex justify-content-center">
            <img name="pain" className="emoji" src={fire} id="fire" onClick={handleChange} />
          </div>
          <div className="col col-3 d-flex justify-content-center">
            <img name="pain" className="emoji" src={hammer} id="hammer" onClick={handleChange} />
          </div>
          <div className="col col-3 d-flex justify-content-center">
            <img name="pain" className="emoji" src={electricity} id="electricity" onClick={handleChange} />
          </div>
        </div>
      </Box>
      <Box className="col-md-6" description="Verbal Scale" color="#0c7ffa">
        <div className="container">
          <div className="row">
            <div className="col col-4 d-flex justify-content-center">
              <button name="verbal" type="button" className="btn btn-dark verbal-button" id="None"onClick={handleChange}>None</button>
            </div>
            <div className="col col-4 d-flex justify-content-center">
              <button name="verbal" type="button" className="btn btn-dark verbal-button" id="Mild"onClick={handleChange}>Mild</button>
            </div>
            <div className="col col-4 d-flex justify-content-center">
              <button name="verbal" type="button" className="btn btn-dark verbal-button" id="Moderate"onClick={handleChange}>Moderate</button>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col col-4 d-flex justify-content-center">
              <button name="verbal" type="button" className="btn btn-dark verbal-button" id="Strong"onClick={handleChange}>Strong</button>
            </div>
            <div className="col col-4 d-flex justify-content-center">
              <button name="verbal" type="button" className="btn btn-dark verbal-button" id="Worst Pain"onClick={handleChange}>Worst Pain</button>
            </div>
          </div>
        </div>
      </Box>
    </div>
    <div className="row justify-content-center">
      <Box className="col-md-6" description="Visual Scale" color="#0c7ffa">
        <EmojiGrid set="visual" handleChange={handleChange} emojis={[[smile, "smile"], [slightSmile, "slightSmile"], [neutralFace, "neutralFace"], [slightFrown, "slightFrown"], [frown, "frown"], [crying, "crying"]]} />
      </Box>
      <Box className="col-md-6" description="Numerical Scale" color="#0c7ffa">
        <div style={{textAlign: "center"}}>
          <p>{'pain: ' + selections.numerical}</p>
            <Slider
              style={{width: "17rem"}}
              styles={{
                active: {
                  backgroundColor: '#e78a11'
                }
              }}
              axis="x"
              xstep={1}
              xmin={0}
              xmax={10}
              x={selections.numerical}
              onChange={({ x }) => setSelections(prevValue => {
                return {
                  ...prevValue,
                  numerical: parseFloat(x.toFixed(2))
                }
              })}
            />
        </div>
      </Box>
    </div>
      <div className="errorMessage" style={{color: 'red', paddingBottom: "0.5rem"}}>&nbsp;{errorMessage}</div>
      <button id="submit" type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
