import React from 'react'
import logo from '../images/Group 195.png'
import mobile from '../images/Group 1686551808.jpg'
import icons from '../images/Frame 1686551798.jpg'
import './Navbar.css';

function Navbar(){
  return (
    <nav className="navbar">
    <div className="navbar-item">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </div>
    <div className="navbar-item">
      <img src={mobile} alt="Mobile" className="navbar-mobile" />
    </div>
    <div className="navbar-item">
      <img src={icons} alt="Icons" className="navbar-icons" />
    </div>
  </nav>
  )
}
export default Navbar