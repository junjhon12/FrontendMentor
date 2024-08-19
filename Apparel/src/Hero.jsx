import logo from './assets/logo.svg';
import desktopHero from './assets/hero-desktop.jpg';
import mobileHero from './assets/hero-mobile.jpg';
import iconError from './assets/icon-error.svg';
import iconArrow from './assets/icon-arrow.svg';
import './Hero.css';
import { useState } from 'react';

function Hero() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // Added state for error messages

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.com+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload on form submission

        if (email.trim() === "") {
            setError(true);
            setErrorMessage("Email address cannot be empty.");
        } else if (validateEmail(email)) {
            setError(false); // Clear the error state
            setErrorMessage("");
            console.log("Form submitted successfully!");
            // Add additional logic here, such as sending the email to a backend service
        } else {
            setError(true); // Set the error state to true
            setErrorMessage("Please provide a valid email.");
        }
    };

    return (
        <main>
            <div className="left-side-container">
                <div className="left-side-components">
                    <div className="logo-container">
                        <img src={logo} alt="Company Logo" />
                    </div>
                    <div className="title-container">
                        <h1 className="first">WE'RE</h1>
                        <h1>COMING</h1>
                        <h1>SOON</h1>
                    </div>
                    <div className="message-container">
                        <p>Hello fellow shoppers! We're currently building our new fashion store. 
                        Add your email below to stay up-to-date with announcements and our launch deals.</p>
                    </div>
                    <div className="user-email-container">
                        <form id="emailForm" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={error ? "input-error" : ""}
                            />
                            {error && <img src={iconError} alt="Error Icon" id="iconError" className="visible" />}
                            <button type="submit"><img src={iconArrow} alt="Submit Icon" /></button>
                        </form>
                        {error && <p id="errorMessage" className="active">{errorMessage}</p>}
                    </div>
                </div>
            </div>

            <div className="right-side-container">
                {/* Background images or other components can be included here */}
            </div>
        </main>
    );
}

export default Hero;
