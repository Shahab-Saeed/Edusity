import React, { useState } from 'react'
import "../src/index.css"
import Header from './Components/Header/Header'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
 
const App = () => {
  const [playstate, setplaystate] = useState(false)
  return (
    <div className='container'>
    <Header/>    
    <Title subtitle="OUR PROGRAM" title="What We Offer"/>
    <Programs/>
    <About setplaystate={setplaystate}/>  
    <Title subtitle="GALLERY" title="Campus Photos"/>
    <Campus/>
    <Title subtitle="TESTIMONIALS" title="What STudent Says"/>
    {/* <Testimonials/> */}
    <Title subtitle="CONTACT Us" title="Get In Touch"/>
    <Contact/>
    <Footer/>
    <  Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )

}

export default App
