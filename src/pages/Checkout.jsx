import {CheckoutItem} from '../components/CheckoutItem';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Checkout.css';

export const Checkout = () =>
{
    return (
        <div className="Checkout">
            <Navbar />
            <section 
            className="page"
            >
                <div 
                className="desktop-left-flex-container"
                >   
                    <CheckoutItem />
                    <CheckoutItem />
                </div>
                <div 
                className="desktop-right-flex-container"
                >
                    <div 
                    className="checkout-summary-container"
                    >
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}