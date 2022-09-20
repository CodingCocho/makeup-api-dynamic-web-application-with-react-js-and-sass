import axios from 'axios';
import {useState,useEffect} from 'react';

import {CatalogItem} from '../components/CatalogItem'
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Catalog.css'

export const Catalog = () =>
{
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(false)

    const getProducts= async () =>
    {
        try
        {
            const apiResponse = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json');
            setProducts(apiResponse.data);
            setLoading(true);
        }
        catch(err)
        {
            alert(err.message);
        }
    }

    useEffect(()=>
    {
        getProducts();
    },[])

    return (
        <div 
        className="Catalog"
        > 
            <Navbar />
            <section 
            className="desktop-page"
            >
            {!loading 
            &&
            <h1 className="loading-text">
                Fetching all our products... 
            </h1>
            }
                <div 
                className="desktop-catalog-grid"
                >
                    {loading && products.map((product, index) =>
                    {
                        if(product.id &&
                            product.api_featured_image &&
                            product.name &&
                            product.price &&
                            product.price !== '0.0')
                            return (<CatalogItem
                                productImage={product.api_featured_image}
                                productIndex={index} 
                                productName={product.name}
                                productPrice={product.price}
                                />)
                        else
                            return (<></>)
                    })}                 
                </div>
            </section>
            <section 
            className="mobile-page"
            >
                {!loading 
            &&
            <h1 className="loading-text">
                Fetching all our products... 
            </h1>
            }
                <div 
                className="mobile-catalog-grid"
                >
                    {loading && products.map((product, index) =>
                    {
                        if(product.id &&
                            product.api_featured_image &&
                            product.name &&
                            product.price &&
                            product.price !== '0.0')
                            return (<CatalogItem
                                productImage={product.api_featured_image}
                                productIndex={index} 
                                productName={product.name}
                                productPrice={product.price}
                                />)
                        else
                            return (<></>)
                    })}                 
                </div>   
            </section>
            <Footer />
        </div>
    )
}