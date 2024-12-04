import React from 'react'

const Display = ({ unit, value }) => {

    return (
        <input
            value={
                value && !isNaN(parseFloat(value))
                    ? unit === 'celcius'
                        ? Math.round((parseFloat(value) * 9) / 5 + 32) // Celsius to Fahrenheit
                        : Math.round((parseFloat(value) - 32) * 5 / 9) // Fahrenheit to Celsius
                    : " "
            }
            readOnly
        />
    )
}

export default Display