import React from "react"
import darktoggler from "../assets/icon-sun.svg"
import lighttoggler from "../assets/icon-moon.svg"

function Header(props) {

 const toggler = props.lightMode ? lighttoggler : darktoggler
 const alt = props.lightMode ? "moon-icon" : "sun-icon"
  return (
    <header className={props.lightMode ? "light" : ""}>
        <h1 className='header-title'>TODO</h1> 
        <span className='mode-toggler' onClick={props.toggleLightMode}> 
        <img src= {toggler} alt={alt}/>
        </span>
    </header>
  )
}

export default Header