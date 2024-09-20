import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App = () => {
  const[showicon,setshowIcon]=useState(false)
  return (
        
    <>
     {showicon?<LoginPopup setshowIcon={setshowIcon}/>:<></>}
       <div className='app'>
      <Navbar setshowIcon={setshowIcon} />
      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
 
  )
}

export default App
