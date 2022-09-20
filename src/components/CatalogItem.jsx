import { Link } from "react-router-dom";
import './styles/CatalogItem.css';

export const CatalogItem = (props) =>
{

    const {productImage, productIndex, productName, productPrice} = props;

    console.log(productIndex);

    
    return (
        
            
                <Link
                className="CatalogItem"
                to={`/catalog/${productIndex}`}
                >
                    <img 
                    alt="product" 
                    className="product"
                    src={productImage}  
                    />
                    <p 
                    className="product-name"
                    >
                        {productName}
                    </p>
                    <p 
                    className="price"
                    >
                        ${productPrice}
                    </p>
                </Link>
        
    )
}