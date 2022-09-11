import HeroImage from '../images/home-hero-image.jpg';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Home.css';

export const Home = () =>
{
    return (
        <div 
        className="Home"
        >
            <Navbar />
            <section 
            className="page"
            >
                <div 
                className="desktop-flex-container"
                >
                    <div 
                    className="left-flex-container"
                    >
                        <p 
                        className="home-heading-1"
                        >
                            BEAUTY'S BIGGEST EVENT
                        </p>
                        <p 
                        className="home-heading-2"
                        >
                            21 Days of Beauty
                        </p>
                        <p 
                        className="home-heading-3"
                        >
                            It's here! The newest arrivals. The hottest exclusives. 50% off must-haves with Daily Beauty Steals®. Get to it.
                        </p>
                        <div 
                        className="shop-now-container"
                        >
                            <span 
                            className="shop-now"
                            >
                                Shop now
                            </span>
                            <i 
                            class="fa-solid fa-arrow-right"
                            >
                            </i>
                        </div>
                    </div>
                    <div 
                    className="right-flex-container"
                    >
                        <img 
                        alt="makeup-model" 
                        className="desktop-hero-image" 
                        src={HeroImage}
                        />
                    </div>
                </div>    
            </section>
            <Footer />
        </div>        
    )
}