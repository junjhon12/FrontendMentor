import logo from './assets/logo.svg';
import desktopHero from './assets/hero-desktop.jpg';
import mobileHero from './assets/hero-mobile.jpg';
import iconError from './assets/icon-error.svg'
import iconArrow from './assets/icon-arrow.svg'
import './Hero.css'

function Hero(){
    return (
    <main>

        <div className="left-side-container">
            <div className="left-side-components">
                <div className="logo-container">
                    <img src={logo} alt="Company Logo" />
                </div>
                <div className="title-container">
                    <h1 class="first">WE'RE</h1>
                    <h1>COMING</h1>
                    <h1>SOON</h1>
                </div>
                <div className="message-container">
                    <p>Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.</p>
                </div>
                <div className="user-email-container">
                    <form method="post">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button type="button"><img src={iconArrow} alt="" /></button>  
                    </form>
                </div>    
            </div>
        </div>


        <div className="right-side-container">
            {/* This is a comment in JSX 
            <div className="right-img-container">
                <img src={desktopHero} alt="" />
            </div>*/ }
        </div>
    </main>
    )
}

export default Hero