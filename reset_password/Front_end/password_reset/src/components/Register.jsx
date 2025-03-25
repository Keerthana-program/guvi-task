// Register.jsx
import React, { useState } from 'react';
import EmailInput from './EmailInput';  // Ensure this import is correct

function Register() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <h2>Register</h2>
            <form>
                <EmailInput value={email} onChange={handleEmailChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
