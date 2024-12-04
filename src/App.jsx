import React, { useState } from 'react'
import Input from './component/Input.jsx';
import './App.css'
import Dropdown from './component/Dropdown.jsx';
import Display from './component/Display.jsx';


const App = () => {
  const [unit, setUnit] = useState('celcius')
  const [input, setInput] = useState(' ')
  const [displayValue, setDisplayValue] = useState(' ')

  return (
    <div className='app-container'>
      <h1>Temprature Converter</h1>
      <div className='main-app'>
        <div className="wrapper">
          <Dropdown
            value={unit}
            setUnitValue={setUnit}
          />
          <Input setInput={setInput} />
        </div>
          <button onClick={() => {
             setDisplayValue(input)
            }}>
          Convert
          </button>
        <div className="wrapper" style={{ fontSize: 18 + 'px' }}>
          <span>{unit === 'celcius' ? 'Fahreheit' : 'Celcius'}</span>
          <Display unit={unit} value={displayValue} />
        </div>
      </div>
    </div>
  )
}

export default App
