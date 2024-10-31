import React, { useState } from 'react';
import './App.css';
const mensproducts = [
    { id: 1, name: "Men's Indigo Printed Kurta", price: 1199, imageUrl: './src/assets/mens-kurta.jpg' },
    { id: 2, name: "Men's Polo Tshirt", price: 1499, imageUrl: './src/assets/polo.jpg' },
    { id: 3, name: "Men's Cotton T-Shirt", price: 699, imageUrl: './src/assets/mens-tshirt.jpg' },
    { id: 4, name: "Men's Brown Jacket", price: 899, imageUrl: './src/assets/jacket.jpg' },
    { id: 5, name: "Men's Hoodie", price: 899, imageUrl: './src/assets/mens-hoodie.jpg' },
    { id: 6, name: "Men's Cap", price: 899, imageUrl: './src/assets/mens-cap.jpg' },
];




function Product({ product }) {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

function App() {
    return (
        <div className="home-page">
            
            <h1 className='category-title'>Mens</h1>
            <div className="product-grid">
                
                {mensproducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <h1 className='category-title'>Womens</h1>
        </div>
    );
}

export default App;
