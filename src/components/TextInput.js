
import React from 'react';

const TextInput = ({ setName, name, submitButton }) => {

    const handleChange = (event) => {
        const myName = event.target.value;
        setName(myName);
    }

    const handleKeyUp = (event) => {
        const key = event.key;
        if (key === 'Enter') {
            submitButton.current.click();
        }
    }
    return (<input type="text" onChange={handleChange} onKeyUp={handleKeyUp} value={name} />);
}

export default TextInput
