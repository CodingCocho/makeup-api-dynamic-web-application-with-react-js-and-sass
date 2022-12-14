import axios from 'axios';
import {ColorButton} from '../components/ColorButton';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Product.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {addToCart} from '../utilities/CartSlice';
import{useDispatch} from 'react-redux';

export const Product = () =>
{
    const dispatch = useDispatch();
    const params = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const getProduct = async () =>
    {
        try
        {
            const apiResponse = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
            setProduct(apiResponse.data[params.productIndex]);
            setLoading(true);
        }
        catch(err)
        {
            alert(err.message);
        }
    }

    const addProductToCart = () =>
    {
        dispatch(addToCart(product));
        // setItems(items.push(product));
        // console.log(items);
    }

    useEffect(()=>
    {
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div 
        className="Product"
        >
            <Navbar />
            
            <section 
            className="desktop-page"
            >
                {!loading 
                &&
                <h2 className="loading-text-product">
                    Fetching your product... 
                </h2>
                }   
                <div 
                className="left-desktop-flex-container"
                >
                    {
                        loading && <div 
                        className="image-container"
                        >
                            <img 
                            alt="product" 
                            className="product" 
                            id="product" 
                            src={product.api_featured_image} 
                            />    
                        </div>  
                    } 
                </div>
                <div 
                className="right-desktop-flex-container"
                >
                    {
                        loading && 
                        <p 
                        className="brand-name" 
                        >
                            {product.brand}
                        </p>
                    }
                    
                    {
                        loading &&
                        <p 
                        className="product-name"
                        >
                            {product.name}
                        </p>
                    }
                    
                    {
                        loading &&
                        <div 
                        className="flex-container-1"
                        >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                    }

                    {
                        loading &&
                        <p 
                        className="price"
                        >
                            ${product.price}0
                        </p>
                    }

                    <div 
                    className="color-grid"
                    >
                        {
                            loading && product.product_colors.map((hexColor) =>
                            {
                                return (
                                    <ColorButton 
                                    color={hexColor.hex_value}
                                    />
                                )
                            })
                        }
                    </div>

                    {
                        loading &&
                        <div 
                        className="flex-container-2"
                        >
                            <button 
                            className="add-to-bag"
                            onClick={addProductToCart}
                            >
                                ADD TO BAG
                            </button>
                            <div 
                            className="favorite-container"
                            >
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <section 
            className="mobile-page"
            >
                <div 
                className="top-mobile-flex-container"
                >
                    {
                        loading && <div 
                        className="image-container"
                        >
                            <img 
                            alt="product" 
                            className="product" 
                            id="product" 
                            src={product.api_featured_image} 
                            />    
                        </div>  
                    } 
                </div>
                <div 
                className="bottom-mobile-flex-container"
                >
                    {
                        loading && 
                        <p 
                        className="brand-name" 
                        >
                            {product.brand}
                        </p>
                    }
                    
                    {
                        loading &&
                        <p 
                        className="product-name"
                        >
                            {product.name}
                        </p>
                    }
                    
                    {
                        loading &&
                        <div 
                        className="flex-container-1"
                        >
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                    }

                    {
                        loading &&
                        <p 
                        className="price"
                        >
                            ${product.price}0
                        </p>
                    }

                    <div 
                    className="color-grid"
                    >
                        {
                            loading && product.product_colors.map((hexColor) =>
                            {
                                return (
                                    <ColorButton 
                                    color={hexColor.hex_value}
                                    />
                                )
                            })
                        }
                    </div>

                    {
                        loading &&
                        <div 
                        className="flex-container-2"
                        >
                            <button 
                            className="add-to-bag"
                            onClick={addProductToCart}
                            >
                                ADD TO BAG
                            </button>
                            <div 
                            className="favorite-container"
                            >
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}