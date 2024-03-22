import React from "react";
import Products from './Products' ;


const Home = () => {
    return (
        <div className="hero">
            <div className="card text-white bg-dark border-0">
                <img src="/assets/bg.jfif" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Laptops Arrivals</h5>
                        <p className="card-text lead fs-2">Check out All The Newest</p>

                    </div>

                </div>
            </div>
            <Products />
        </div>

    );
}

export default Home;




