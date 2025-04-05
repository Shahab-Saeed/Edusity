import React from 'react'
import './navbar.css'
import edustitylogo from "../../assets/logo.png"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import menuicon from "../../assets/menu-icon.png"

const Navbar = () => {
  const [sticky, setsticky] = useState(false)
  const [mobilemenu, setMobilemenu] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false)
    })
  

  }, [])

  const togglemenu=()=>{
      mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
      console.log(mobilemenu);
      
  }
  
  return (
    <div className={`Navbar ${sticky ? "darknav" :  ""}`}>
          <div className="child1">
              <img src={edustitylogo} alt="" />
          </div>
          <div className="child2">
            <ul className={mobilemenu ? 'hidemobilemenu' : ''}>
              <li className='a'><Link to='header' smooth={true} offset={0} duration={500}>Home</Link>  </li>
              <li className='a'><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link>  </li>
              <li className='a'><Link to='about ' smooth={true} offset={-150} duration={500}>About US</Link>  </li>
              <li className='a'><Link to='campus' smooth={true} offset={-260} duration={500}>Campuses</Link>  </li>
              <li className='a'><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link>  </li>
              <li className='btn d'>< Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link> </li>
            </ul>
            <img src={menuicon} alt="" className='menuicon' onClick={togglemenu}/>
          </div>
    </div>
  )
}

export default Navbar
