import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import DividerImage from '../images/divider-image-2.jpg';
import HeroImage1 from '../images/gift card.jpg';
import HeroImage2 from '../images/gift card 2.jpg';
import './styles/Giftcards.css';

export const Giftcards = () => 
{
    return(
        <div 
        className="Giftcards"
        >
            <Navbar />
            <section 
            className="desktop-page"
            >
                <img 
                alt="makeup-divider"
                className="makeup-divider"
                src={DividerImage}  
                />
                <p 
                className="heading-1"
                >
                    The Beauty of Gift Cards?
                </p>
                <p 
                className="heading-2"
                >
                    Everything.
                </p>
                <div 
                className="desktop-flex-container-1"
                >
                    <img  
                    alt="" 
                    className="hero-image-1" 
                    src={HeroImage1}
                    />
                    
                    <img  
                    alt="" 
                    className="hero-image-2" 
                    src={HeroImage2}
                    />
                </div>
                <div 
                className="desktop-flex-container-2"
                >
                    <button 
                    id="corporate"
                    >
                        Corporate Gift Cards
                    </button>
                    <button 
                    id="balance"
                    >
                        Check Your Balance
                    </button>
                    <button 
                    id="faq"
                    >
                        FAQ
                    </button>
                </div>
            </section>
            <section 
            className="mobile-page"
            >
                <p 
                className="heading-1"
                >
                    The Beauty of Gift Cards?
                </p>
                <p 
                className="heading-2"
                >
                    Everything.
                </p>
                <img  
                alt="" 
                className="hero-image-1" 
                src={HeroImage1}
                />
                <img  
                alt="" 
                className="hero-image-2" 
                src={HeroImage2}
                />
                <div 
                className="mobile-flex-container"
                >
                    <button 
                    id="corporate"
                    >
                        Corporate Gift Cards
                    </button>
                    <button 
                    id="balance"
                    >
                        Check Your Balance
                    </button>
                    <button 
                    id="faq"
                    >
                        FAQ
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    )
}