// export default App;

import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file for custom styling

const App = () => {
    // State to manage the angle value
    const [angleInput, setAngleInput] = useState('0');
    const [sliderVal, setSliderAngle] = useState('0');

    // detect the value entered on the text box
    let [temp, setTemp] = useState('0');

    // Handler to update angle based on input value
    const handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        setTemp(value);
    };

    // Handler to update angle based on slider value
    const handleSliderChange = (e) => {
        let value = parseInt(e.target.value);
        setSliderAngle(value);
        if (isNaN(value)) {
            value = 0;
        }else if (value < 0){
            // value = (-1 * value) + 180;
            value = 360 + value;
        }
        document.getElementById('angleInput').value = value;
        setAngleInput(value);
    };

    // Handler to update angle based on radio button selection
    const handleRadioChange = (e) => {
        setSliderAngle(parseInt(e.target.value));
        setAngleInput(parseInt(e.target.value));
        document.getElementById('angleInput').value = parseInt(e.target.value);
    };

    const handleButtonClick = () => {
      // let value = parseInt(e.target.value);
      // setTemp(value);
      if (isNaN(temp)) {
          temp = 0;
      } else {
          temp = (temp % 360 + 360) % 360;
      }
      document.getElementById('angleInput').value = temp;
      if(temp > 180){
        setSliderAngle(temp - 360);
      }else{
        setSliderAngle(temp);
      }
      setAngleInput(temp);
  };

    return (
        <div className="App">
          <header className="App-header">
            <div className="text-center">
                <h1 className="display-5 mb-5"><strong>Angle Selector</strong></h1>
            </div>
            <br></br>
            <div className="main row justify-content-center">
                <div className="text-center mb-4">
                    <label style={{ marginRight: '15px' }} htmlFor="angleInput">Angle Input (°):</label>
                    <input
                        type="number"
                        id="angleInput"
                        defaultValue={0}
                        onChange={handleInputChange}
                        style={{ marginRight: '15px' }}
                    />
                    <button className="btn btn-success btn-sm add-btn ml-2" 
                        onClick = {handleButtonClick}
                    >
                        Enter
                    </button>
                </div>
                <br></br><br></br>
                <div className="text-center mb-4">
                    <label style={{ marginRight: '15px' }} htmlFor="angleSlider">Angle Slider (°):</label>
                    <input
                        type="range"
                        id="angleSlider"
                        min="-180"
                        max="180"
                        value={sliderVal}
                        onChange={handleSliderChange}
                        style={{ width: '1000px', height: '10px' }}
                    />
                </div>
                <br></br><br></br>
                <div className="text-center">
                    <label style={{ marginRight: '65px' }}>
                        <input
                            type="radio"
                            name="angle"
                            value="0"
                            // defaultChecked
                            checked={angleInput === 0}
                            onChange={handleRadioChange}
                        />
                        0°
                    </label>
                    <label style={{ marginRight: '65px' }}>
                        <input
                            type="radio"
                            name="angle"
                            value="45"
                            checked={angleInput === 45}
                            onChange={handleRadioChange}
                        />
                        45°
                    </label>
                    <label style={{ marginRight: '65px' }}>
                        <input
                            type="radio"
                            name="angle"
                            value="60"
                            checked={angleInput === 60}
                            onChange={handleRadioChange}
                        />
                        60°
                    </label>
                    <label style={{ marginRight: '65px' }}>
                        <input
                            type="radio"
                            name="angle"
                            value="90"
                            checked={angleInput === 90}
                            onChange={handleRadioChange}
                        />
                        90°
                    </label>
                    <label style={{ marginRight: '65px' }}>
                        <input
                            type="radio"
                            name="angle"
                            value="180"
                            checked={angleInput === 180}
                            onChange={handleRadioChange}
                        />
                        180°
                    </label>
                </div>
            </div>
          </header>
        </div>
    );
};

export default App;
