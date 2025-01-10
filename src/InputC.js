import React, { useState } from "react";

function InputC({ onInputChange }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onInputChange(value); // Pass the value up to the parent component
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter some text"
            />
        </div>
    );
}

export default InputC;