import React, { useState, useEffect } from 'react'
import './Navbar.css'
import edustitylogo from "../../assets/logo.png"
import { Link } from 'react-scroll'
import menuicon from "../../assets/menu-icon.png"

const Navbar = () => {
  const [sticky, setsticky] = useState(false)
  const [mobilemenu, setMobilemenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setsticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const togglemenu = () => {
    setMobilemenu(!mobilemenu)
  }

  const closeMenu = () => {
    setMobilemenu(false)
  }

  return (
    <div className={`Navbar ${sticky ? "darknav" : ""}`}>
      <div className="child1">
        <img src={edustitylogo} alt="logo" />
      </div>

      <div className="child2">
        <ul className={mobilemenu ? 'hidemobilemenu' : ''}>
          <li className='a'>
            <Link to='header' smooth={true} offset={0} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className='a'>
            <Link to='programs' smooth={true} offset={-260} duration={500} onClick={closeMenu}>
              Program
            </Link>
          </li>
          <li className='a'>
            <Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className='a'>
            <Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>
              Campuses
            </Link>
          </li>
          <li className='a'>
            <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>
              Testimonials
            </Link>
          </li>
          <li className='btn d'>
            <Link to='contact' smooth={true} offset={-260} duration={500} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        <img 
          src={menuicon} 
          alt="menu" 
          className='menuicon' 
          onClick={togglemenu} 
        />
      </div>
    </div>
  )
}

export default Navbar
