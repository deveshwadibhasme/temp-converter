import { useState } from "react"


const Dropdown = ({ value, setUnitValue }) => {

    
    const [newValue, setNewValue] = useState(value);
    
    function setValue() {
        if (value === 'celcius') {
            setNewValue('fahrenheit');
        } else if (value === 'fahrenheit') {
            setNewValue('celcius');     
        }   
    }


    return (
        <select onChange={(e) => {
            setUnitValue(e.target.value)
            setValue();
            console.log('changed value');
        }} value={newValue}>
            <option value='celcius'>Celcius</option>
            <option value='fahrenheit'>Fahrenheit</option>
        </select>
    )
}

export default Dropdown