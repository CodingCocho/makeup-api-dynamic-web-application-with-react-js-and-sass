import{useDispatch} from 'react-redux';
import {removeFromCart, incrementProduct, decrementProduct} from '../utilities/CartSlice';
import './styles/CheckoutItem.css';

export const CheckoutItem = (props) =>
{
    const dispatch = useDispatch();
    const {count, index, productImage, productName, productPrice} = props;

    const increment = () =>
    {
        dispatch(incrementProduct(index));
    }

    const decrement = () =>
    {
        dispatch(decrementProduct(index))
    }

    const removeProduct = () =>
    {
        dispatch(removeFromCart(index));
    }

    return (
        <div 
        className="CheckoutItem"
        id="CheckoutItem"
        >
            <div className="desktop-flex-container">
                
                <img 
                alt="sample-product" 
                className="product-image" 
                src={productImage}
                />
                <div 
                className="desktop-flex-container-2"
                >
                    <p 
                    className="product-name"
                    >
                        {productName}
                    </p>
                    <p 
                    className="price" 
                    id="price"
                    >
                        ${productPrice}
                    </p>
                    <p 
                    className="in-stock"
                    >
                        In Stock
                    </p>
                    <div 
                    className="desktop-flex-container-3"
                    >
                        <div 
                        className="quantity-container"
                        >
                            <i 
                            class="fa-solid fa-minus"
                            onClick={decrement}
                            >
                            </i>
                            <p 
                            id="quantity">
                                {count}
                            </p>
                            <i 
                            class="fa-solid fa-plus"
                            onClick={increment}
                            ></i>
                        </div>
                        <button 
                        className="delete"
                        onClick={removeProduct}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}