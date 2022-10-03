import { useSelector } from 'react-redux';
import {CheckoutItem} from '../components/CheckoutItem';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Checkout.css';

export const Checkout = () =>
{
    const cart = useSelector(state => state.cart.bag);
    const cartPrice = Number(useSelector(state => state.cart.totalPrice)).toFixed(2);
    const totalItems = useSelector(state => state.cart.itemsAdded);
    return (
        <div className="Checkout">
            <Navbar />
            <section 
            className="desktop-page"
            >
                <div 
                className="desktop-left-flex-container"
                >   
                    {cart.map((product) =>
                    {
                        return (
                            <CheckoutItem 
                            count = {product[1]}
                            index = {product[0].id}
                            productImage={product[0].api_featured_image}
                            productName={product[0].name}
                            productPrice={Number(product[0].price).toFixed(2)}
                            />
                        )
                    })}
                </div>
                <div 
                className="desktop-right-flex-container"
                >
                    <p 
                    className="subtotal" 
                    >
                        Subtotal (<span id="total-item">{totalItems} item(s)</span>): <span id="total-price"> ${cartPrice}</span>  
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
                {cart.map((product) =>
                    {
                        return (
                            <CheckoutItem 
                            count = {product[1]}
                            productImage={product[0].api_featured_image}
                            productName={product[0].name}
                            productPrice={product[0].price}
                            />
                        )
                    })}
                <div 
                className="mobile-flex-container"
                >
                    <p 
                    className="subtotal" 
                    >
                        Subtotal (<span id="total-item"> 1 item</span>): <span id="total-price"> ${cartPrice}</span>  
                    </p>
                    <button 
                    className="place-order"
                    >
                        Proceed to checkout
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    )
}