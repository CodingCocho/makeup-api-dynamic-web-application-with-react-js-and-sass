import {Navbar} from '../components/Navbar';
import DividerImage from '../images/divider-image.png';
import './styles/Giftcards.css';

export const Giftcards = () => 
{
    return(
        <div 
        className="Giftcards"
        >
            <Navbar />
            <section 
            className="page"
            >
                <img 
                alt="makeup-divider"
                className="makeup-divider"
                src={DividerImage}  
                />
            </section>
        </div>
    )
}