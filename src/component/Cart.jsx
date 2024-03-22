import React from 'react';
import Product from "../component/Product";

const Cart = ({ Product }) => {
    const handleButton = (Product) => {
        
    };

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={Product.image} alt={Product.title} height="200px" width="180px" />
                </div>
                <div className='col-md-4'>
                    <h3>{Product.title}</h3>
                    <p className="lead fw-bold">
                        {Product.qty} X ${Product.price} = ${Product.qty * Product.price}
                    </p>
                    <button className="btn btn-outline-dark" onClick={() => handleButton(Product)}>
                        <i className='fa fa-minus'></i>
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleButton(Product)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;
