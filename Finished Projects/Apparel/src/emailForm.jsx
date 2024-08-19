import React, { useState } from 'react';

function EmailForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Basic email validation pattern
        const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!validEmail.test(email)) {
            setError(true);
        } else {
            setError(false);
            alert('Check your email');
            // You can proceed with form submission here
        }
    };

    return (
        <div className="user-email-container">
            <form method="post" id="emailForm" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                />
                {error && (
                    <img src={iconError} alt="" id="iconError" style={{ display: 'inline' }} />
                )}
                <button type="submit">
                    <img src={iconArrow} alt="" />
                </button>
            </form>
            {error && (
                <p id="errorMessage" style={{ color: 'red', marginTop: '10px' }}>
                    Please provide a valid email
                </p>
            )}
        </div>
    );
}

export default EmailForm;
