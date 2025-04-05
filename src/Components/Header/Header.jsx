import React from 'react'
import Headerbar from '../Headerbar/Headerbar'
import Navbar from '../Navbar/Navbar'
import heroimg from "../../assets/hero.png"
import "./Header.css"
const Header = () => {
    


  return (
    <div className='header'>
        <Navbar/>
        <Headerbar/>      
    </div> 
  )
}

export default Header
