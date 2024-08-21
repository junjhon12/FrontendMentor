
import { useState } from 'react';
import desktopBackground from './assets/bg-intro-desktop.png'
import phoneBackground from './assets/bg-intro-mobile.png'
import iconError from './assets/icon-error.svg'
import './LoginPage.css';
function LoginPage() {
    {/**
        cd sign-up_form
        npm run dev
    */}
    return (
        <main>
            <div className="main-container">
                <div className="left-container">
                    <span className="big_text">Learn to code by watching others</span><br />    
                    <span className="small_text">See how experienced developers solve problems in real-time.<br />Watching scripted tutorials is great, but understanding how developers think is invaluable.</span>
                </div>
                <div className="right-container">
                    <div className="right-main-container">
                        <div className="trial-container">
                            <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
                        </div>
                        <div className="register-container">
                            <div className="input">
                                <input type="text" name="firstName" id="firstName" placeholder='First Name'/>
                            </div>
                            <div className="input">
                                <input type="text" name="lastName" id="lastName" placeholder='Last Name'/>
                            </div>
                            <div className="input">
                                <input type="email" name="email" id="email" placeholder='Email Address'/>
                            </div>
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder='Password'/>
                            </div>
                            <div className="input">
                                <span className="submit" placeholder='CLAIM YOUR FREE TRIAL'></span>
                            </div>
                            <span className="term">By clicking the button, you are agreeing to our <b>Terms and Services</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginPage;