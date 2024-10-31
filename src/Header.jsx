import React, {useState} from "react";



export default function Header({setCurrent}) {
    return (
        <header className="header">
            <div className="aestheticbar"></div>
            <div className="header-content">
                <div className="logo" onClick={() => setCurrent("Home")}>RENOON</div>
                <input type="text" placeholder="Search Items" className="search-bar" />
                <button className="cart-btn" onClick={() => setCurrent("Cart")}>Cart</button>
                <button className="login-btn" onClick={() => setCurrent("Profile")}>Parth</button>
            </div>
            <TopMenu />
        </header>
    );
}


function TopMenu() {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    return (
        <nav className="top-menu">
            <div 
                className="menu-category" 
                onMouseEnter={() => handleMouseEnter('mens')}
                onMouseLeave={handleMouseLeave}
            >
                MENS
                {activeCategory === 'mens' && (
                    <div className="dropdown-menu">
                        <p>T-Shirts</p>
                        <p>Shirts</p>
                        <p>Kurta</p>
                    </div>
                )}
            </div>
            <div 
                className="menu-category" 
                onMouseEnter={() => handleMouseEnter('womens')}
                onMouseLeave={handleMouseLeave}
            >
                WOMENS
                {activeCategory === 'womens' && (
                    <div className="dropdown-menu">
                        <p>Dresses</p>
                        <p>Tops</p>
                        <p>Sarees</p>
                    </div>
                )}
            </div>
            <div 
                className="menu-category" 
                onMouseEnter={() => handleMouseEnter('kids')}
                onMouseLeave={handleMouseLeave}
            >
                KIDS
                {activeCategory === 'kids' && (
                    <div className="dropdown-menu">
                        <p>T-Shirts</p>
                        <p>Trousers</p>
                        <p>Jackets</p>
                    </div>
                )}
            </div>
        </nav>
    );
}
