import { useState } from 'react';
import iconError from './assets/icon-error.svg';
import './LoginPage.css';

function LoginPage() {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // State to hold form validation errors
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Handle changes to input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form data state
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the error for the updated field
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    // Validate input fields
    const validateInputs = () => {
        const errors = {};

        // Check for empty first name
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name cannot be empty';
        }

        // Check for empty last name
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name cannot be empty';
        }

        // Check for empty email or invalid format
        if (!formData.email.trim()) {
            errors.email = 'Email cannot be empty';
        } else if (!/^[^\s@]+@[^\s@]+\.(com)$/.test(formData.email)) {
            errors.email = 'Email must be in a valid format and end with .com';
        }

        // Check for empty password
        if (!formData.password.trim()) {
            errors.password = 'Password cannot be empty';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs and either submit or log errors
        if (validateInputs()) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Form has errors:', formErrors);
        }
    };

    return (
        <main>
            <div className="main-container">
                <div className="left-container">
                    <div className="left-text">
                        <span className="big_text">Learn to code by<br /> watching others</span><br />
                        <span className="small_text">
                            See how experienced developers solve problems in real-time.<br />
                            Watching scripted tutorials is great, but understanding how<br />
                            developers think is invaluable.
                        </span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-main-container">
                        <div className="trial-container">
                            <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
                        </div>
                        <form className="register-container" onSubmit={handleSubmit}>
                            {/* First Name Input */}
                            <div className="input">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.firstName ? 'visible' : ''}`} />
                                <span className={`errorMessage ${formErrors.firstName ? 'visible' : ''}`}>
                                    <i>{formErrors.firstName}</i>
                                </span>
                            </div>

                            {/* Last Name Input */}
                            <div className="input">
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.lastName ? 'visible' : ''}`} />
                                <span className={`errorMessage ${formErrors.lastName ? 'visible' : ''}`}>
                                    <i>{formErrors.lastName}</i>
                                </span>
                            </div>

                            {/* Email Input */}
                            <div className="input">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.email ? 'visible' : ''}`} />
                                <span className={`errorMessage ${formErrors.email ? 'visible' : ''}`}>
                                    <i>{formErrors.email}</i>
                                </span>
                            </div>

                            {/* Password Input */}
                            <div className="input">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.password ? 'visible' : ''}`} />
                                <span className={`errorMessage ${formErrors.password ? 'visible' : ''}`}>
                                    <i>{formErrors.password}</i>
                                </span>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="signUp-button">CLAIM YOUR FREE TRIAL</button>

                            {/* Terms and Services Notice */}
                            <div className="terms">
                                <span className="term">
                                    By clicking the button, you are agreeing to our <b>Terms and Services</b>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginPage;
