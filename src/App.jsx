import React, {useState} from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Profile from './Profile.jsx'


function App() {
    const [current, setCurrent] = useState("Home");
    
   if(current == "Home"){
    return(
        <>
            <Header setCurrent={setCurrent}/>
            <Home/>
        </>
    )
   }

   else if(current == "Cart"){
    return(
        <>
            <Header setCurrent={setCurrent}/>
            <Cart/>
        </>
    )
   }

   else{
    return(
        <>
            <Header setCurrent={setCurrent}/>
            <Profile/>
        </>
    )
   }
    }

export default App