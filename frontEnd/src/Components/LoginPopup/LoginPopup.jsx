import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowIcon}) => {
    const[currstate,setcurrState]=useState("Login")
  return (
    <div class="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={()=>setshowIcon(false)} src={assets.cross_icon} alt=""/>
        </div>
          <div className="login-popup-inputs">
            {currstate==="Login"?<></>:<><input type="name" placeholder='name' required/></>}
            <input type="email" placeholder='email' required/>
            <input type="password" placeholder='password' required/>
          </div>
          <button>{currstate==="Sign-Up"?"Sign-up":"Login"}</button>
          <div className="login-popup-condition">
               <input type="checkbox" required/>
               <p>i agree to the terms of use & privacy policy</p>
          </div>
          {currstate==="Login"?<p>Create a new account ? <span onClick={()=>setcurrState("Sign-Up")}>Click here</span></p>:
          
          <p>Already have acccount ?<span onClick={()=>setcurrState("Login")}>Login here</span></p>
          }
          
      </form>
      </div>
    
  )
}

export default LoginPopup
