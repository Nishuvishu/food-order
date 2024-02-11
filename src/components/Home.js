import React from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-4">
                We Deliver High-Quality Food Instantly
            </h1>
            <p className="text-lg text-center mb-4">
                Explore our wide range of dishes, all made with the same high-quality ingredients and recipes listed below.
            </p>
            <div className="flex justify-center">
                <h5 className="text-lg font-semibold">Explore Our Menu Below</h5>
            </div>
        </div>
    );
}

export default Home;
