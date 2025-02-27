import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const  Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let isMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/Products/");
            if (isMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                isMounted.current = false;

            }
        }
        getProducts();
    }, [filter, isMounted]) ;


    
    function Loading() {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    function filterProduct(cat) {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };
    function ShowProducts() {
        return (<>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Laptops")}>Laptop</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Watches")}>Watches</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Electronics")}>Electronics</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Screens")}>Screen</button>
            </div>
            {filter.map((product) => {
                return (
                    <>
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img className="card-img-top" src={product.img} alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}


        </>

        );
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center text-dark">Latest products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}


export default Products;