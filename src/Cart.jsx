import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Cart.css';
import Header from './Header.jsx'

const ItemTypes = {
    PRODUCT: 'product',
};

const recommendations = [
    { id: 1, name: "Women's Brown Scarf", imageUrl: './src/assets/scarf.webp' },
    { id: 2, name: "Men's Casual Kurta", imageUrl: './src/assets/mens-kurta.jpg' },
];

const initialCartItems = [
    { id: 3, name: "Women's Formal Blazer", imageUrl: './src/assets/blazer.webp' },
    { id: 4, name: "Men's Formal Shirt", imageUrl: './src/assets/formal.jpg' },
];

// Draggable item component
function RecommendationItem({ item }) {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.PRODUCT,
        item: { ...item },
    }));

    return (
        <div ref={drag} className="recommendation-item">
            <img src={item.imageUrl} alt={item.name} className="recommendation-image" />
            <p>{item.name}</p>
        </div>
    );
}

// Droppable Cart component
function Cart({ cartItems, addItem }) {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.PRODUCT,
        drop: (item) => addItem(item),
    }));

    return (
        <div ref={drop} className="cart">
            <h2>Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                    <p>{item.name}</p>
                </div>
            ))}
            <div className="add-more">
                <button className="add-more-btn">+ Add More</button>
                <p>Or Drag Items from Recommendation</p>
            </div>
        </div>
    );
}

function App() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                
           
                
                <div className="main-content">
                    <Cart cartItems={cartItems} addItem={addItemToCart} />
                    
                    <div className="recommendations">
                        <h2>Recommendations</h2>
                        {recommendations.map((item) => (
                            <RecommendationItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                
                <footer className="footer">
                    <div className="progress-bar">
                        
                        <button className="payment-btn">Proceed to Payment</button>
                    </div>
                </footer>
            </div>
        </DndProvider>
    );
}

export default App;
