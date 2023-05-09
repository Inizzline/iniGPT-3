import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from "react-icons/ri"
import "./Navbar.css"
import ini_logo from "../../assets/ini_logo.png"

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#wgpt">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const unClicked = () => {
     setToggleMenu(false)
  }

  const Clicked = () => {
    setToggleMenu(true)
 }


 
  
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={ini_logo} alt="logo"/>
        </div>
        <div className="gpt__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign In</p>
        <button className="button">Sign Up</button>
      </div>
      <div className="gpt__navbar-menu">
       {toggleMenu 
        ?
        <RiCloseLine color="#fff" size={27} onClick={unClicked}/>
        :
        <RiMenu3Line color="#fff" size={27} onClick={Clicked}/>} 
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu/>
              <div className="gpt__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button className="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
