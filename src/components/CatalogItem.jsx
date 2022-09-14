import './styles/CatalogItem.css';

export const CatalogItem = (props) =>
{

    const {productImage, productName, productPrice} = props;

    return (
        <div 
        className="CatalogItem"
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
        </div>
    )
}