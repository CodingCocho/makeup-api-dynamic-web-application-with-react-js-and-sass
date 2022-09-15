import axios from 'axios';
import {useState,useEffect} from 'react';
import {CatalogItem} from '../components/CatalogItem';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Categorypage.css'

export const Nailpolishes = () =>
{

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false)

    const getProducts = async () =>
    {
        try
        {
            const apiResponse = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish');
            setProducts(apiResponse.data);
            setLoading(true);
        }
        catch(err)
        {
            alert(err.message);
        }
    }

    useEffect(() =>
    {
        getProducts();
    },[])

    console.log("load")
    return (
        <div 
        className="Catalog"
        > 
            <Navbar />
            <section 
            className="page"
            >
                {!loading 
                    &&
                    <h1 className="loading-text">
                        Fetching products... 
                    </h1>
                }
                <div 
                className="desktop-catalog-grid"
                >
                    
                    {loading && products.map((product) =>
                    {
                        if(product.id &&
                            product.api_featured_image &&
                            product.name &&
                            product.price &&
                            product.price !== '0.0')
                            return (<CatalogItem
                                id={product.id} 
                                productImage={product.api_featured_image} 
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