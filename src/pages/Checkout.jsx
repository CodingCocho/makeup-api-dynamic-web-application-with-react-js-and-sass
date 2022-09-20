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
            className="desktop-page"
            >
                <div 
                className="desktop-left-flex-container"
                >   
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                </div>
                <div 
                className="desktop-right-flex-container"
                >
                    <p 
                    className="subtotal" 
                    >
                        Subtotal (<span id="total-item"> 1 item</span>): <span id="total-price"> $10.99</span>  
                    </p>
                    <button 
                    className="place-order"
                    >
                        Proceed to checkout
                    </button>
                </div>
            </section>
            <section 
            className="mobile-page"
            >

            </section>
            <Footer />
        </div>
    )
}