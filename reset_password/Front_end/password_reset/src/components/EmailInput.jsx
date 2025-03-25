// EmailInput.jsx
import React from 'react';

function EmailInput({ value, onChange }) {
    return (
        <input
            type="email"
            value={value}
            onChange={onChange}
            placeholder="Enter your email"
        />
    );
}

export default EmailInput;
