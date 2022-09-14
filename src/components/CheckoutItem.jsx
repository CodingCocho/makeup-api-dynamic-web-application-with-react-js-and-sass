import SampleProduct from '../images/product-example.png'
import './styles/CheckoutItem.css';

export const CheckoutItem = () =>
{
    return (
        <div 
        className="CheckoutItem"
        id="CheckoutItem"
        >
            <div className="desktop-flex-container">
                
                <img 
                alt="sample-product" 
                className="product-image" 
                src={SampleProduct}
                />

                <div 
                className="desktop-flex-container-2"
                >
                    <p 
                    className="product-name"
                    >
                        Sample Product
                    </p>
                    <p 
                    className="in-stock"
                    >
                        In Stock
                    </p>
                    <div 
                    className="desktop-flex-container-3"
                    >
                        <select   
                        className="quantity-input"
                        id="quantity-selector"
                        name="quantity"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>            
                        </select>
                        <button 
                        className="delete"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <p 
                className="price" 
                id="price"
                >
                    $10.99
                </p>
            </div>
        </div>
    )
}