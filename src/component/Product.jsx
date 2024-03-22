import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        
        getProduct();
    }, [id]);

    const Loading = () => (
        <>
            <div className="col-md-6">
                <Skeleton height={400} count={4} />
                <SkeletonTheme baseColor="#202020" highlightColor="#444" />
                
            </div>
            <div className="col-md-6" style={{ lineHeight: 2 }}>
            
            </div>
        </>
    );

    const ShowProduct = () => (
        <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <p className="lead fw-bold">Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i></p>
                <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add to Cart</button>
                <NavLink className="btn btn-dark ms-2 px-3 py-2" to="/cart">Go to Cart</NavLink>
            </div>
        </>
    );

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Product;
























