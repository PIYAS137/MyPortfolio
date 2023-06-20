import {useState} from 'react'
import {FaBars,FaCompressArrowsAlt } from "react-icons/fa";
const HandBurger = () => {
    
    const handleClick=()=>{
      document.querySelector("nav")?.setAttribute("data-theme","show")
    }
    
  return (
    <div className='handBurgerMenuWrapper'>
        <div className="handBurgerMenu"><FaBars style={{fontSize:"1.5rem"}} onClick={handleClick}/></div>
        <div style={{color:"gray",opacity:".2"}}>EDITION 2023</div>
    </div>
  )
}

export default HandBurger;
