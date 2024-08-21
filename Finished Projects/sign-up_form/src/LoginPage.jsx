import { useState } from 'react';
import iconError from './assets/icon-error.svg';
import './LoginPage.css';

function LoginPage() {
    // State to track form input values and errors
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate inputs
    const validateInputs = () => {
        const errors = {};
    
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name cannot be empty';
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name cannot be empty';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email cannot be empty';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Looks like this is not an email';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password cannot be empty';
        }
    
        setFormErrors(errors);
    
        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateInputs()) {
            // Form is valid, submit the data (e.g., make an API call)
            console.log('Form submitted:', formData);
        } else {
            // Form is invalid, display errors
            console.log('Form has errors:', formErrors);
        }
    };

    return (
        <main>
            <div className="main-container">
                <div className="left-container">
                    <div className="left-text">
                        <span className="big_text">Learn to code by<br /> watching others</span><br />
                        <span className="small_text">See how experienced developers solve problems in real-time.<br />Watching scripted tutorials is great, but understanding how <br />developers think is invaluable.</span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-main-container">
                        <div className="trial-container">
                            <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
                        </div>
                        <form className="register-container" onSubmit={handleSubmit}>
                            <div className="input">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.firstName ? 'visible' : 'hidden'}`} />
                                {formErrors.firstName && <span className="errorMessage"><i>{formErrors.firstName}</i></span>}
                            </div>
                            <div className="input">
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.lastName ? 'visible' : 'hidden'}`} />
                                {formErrors.lastName && <span className="errorMessage"><i>{formErrors.lastName}</i></span>}
                            </div>
                            <div className="input">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.email ? 'visible' : 'hidden'}`} />
                                {formErrors.email && <span className="errorMessage"><i>{formErrors.email}</i></span>}
                            </div>
                            <div className="input">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <img src={iconError} alt="" className={`errorSign ${formErrors.password ? 'visible' : 'hidden'}`} />
                                {formErrors.password && <span className="errorMessage"><i>{formErrors.password}</i></span>}
                            </div>
                            <button type="submit" className="signUp-button">CLAIM YOUR FREE TRIAL</button>
                            <div className="terms">
                                <span className="term">By clicking the button, you are agreeing to our <b>Terms and Services</b></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginPage;
