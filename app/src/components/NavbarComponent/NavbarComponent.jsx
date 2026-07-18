/* eslint-disable no-sequences */
import React, { useState } from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'
import { useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'


const NavbarComponent = () => {
  const [home,setHome]=useState(true);
  const [about,setAbout]=useState(false);
  const [contact, setContact]=useState(false)
  const [gallery,setGallery]=useState(false)
  const [testimonials,setTestimonials]=useState(false)
  const scrollTo=(id)=>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
  }
  const navigate=useNavigate()
  return (
    <>
    <div className="navbar">
      {/*----------------------*/}
      <div className="navbar-left">
        <h3 onClick={()=>(navigate('/'))}>LIVING WORD</h3>
      </div>
      {/*----------------------*/}
      <div className="navbar-mid">
        <ul>
          <li style={{color:home?"#6E0983":""}} onClick={()=>(navigate('/'),setHome(!home),setAbout(false),setContact(false),setGallery(false),setTestimonials(false))}>Home</li>
          <li style={{color:about?"#6E0983":""}} onClick={()=>(navigate('/aboutUs'),setHome(false),setAbout(!about),setContact(false),setGallery(false),setTestimonials(false))}>About Us</li>
          <li style={{color:contact?"#6E0983":""}} onClick={()=>(navigate('/'),scrollTo("contact"),setHome(false),setAbout(false),setContact(!contact),setGallery(false),setTestimonials(false))}>Contact Us</li>
          <li style={{color:gallery?"#6E0983":""}} onClick={()=>(navigate('/gallery'),setHome(false),setAbout(false),setContact(false),setGallery(!gallery),setTestimonials(false))}>Gallery</li>
          <li style={{color:testimonials?"#6E0983":""}} onClick={()=>(navigate('/'),scrollTo("quote"),setHome(false),setAbout(false),setContact(false),setGallery(false),setTestimonials(!testimonials))}>Testimonials</li>
        </ul>

      </div>
      {/*----------------------*/}
      <div className="navbar-right">
        <img src={assets.menuIcon} alt="menu" onClick={()=>(document.getElementById("sidemenu").style.display="flex")} />
      </div>
    </div>
    <div id='sidemenu' className="sidemenu">
      <div className="sidemenu-top">
        <img src={assets.closeIcon} alt="close" onClick={()=>(document.getElementById("sidemenu").style.display="none")} />
      </div>
      <div className="sidemenu-mid">
        <ul>
          <li style={{color:home?"#6E0983":""}} onClick={()=>(navigate('/'),setHome(!home),setAbout(false),setContact(false),setGallery(false),setTestimonials(false),document.getElementById("sidemenu").style.display="none")}>Home</li>
          <li style={{color:about?"#6E0983":""}} onClick={()=>(navigate('/aboutUs'),setHome(false),setAbout(!about),setContact(false),setGallery(false),setTestimonials(false),document.getElementById("sidemenu").style.display="none")}>About</li>
          <li onClick={()=>(toast.success('Feature under development'),document.getElementById("sidemenu").style.display="none")}>Clubs</li>
          <li onClick={()=>(toast.success('Feature under development'),document.getElementById("sidemenu").style.display="none")}>Events</li>
          <li style={{color:contact?"#6E0983":""}} onClick={()=>(navigate('/'),scrollTo("contact"),setHome(false),setAbout(false),setContact(!contact),setGallery(false),setTestimonials(false),document.getElementById("sidemenu").style.display="none")}>Contacts</li>
          <li style={{color:gallery?"#6E0983":""}} onClick={()=>(navigate('/gallery'),setHome(false),setAbout(false),setContact(false),setGallery(!gallery),setTestimonials(false),document.getElementById("sidemenu").style.display="none")}>Gallery</li>
          <li style={{color:testimonials?"#6E0983":""}} onClick={()=>(navigate('/'),scrollTo("quote"),setHome(false),setAbout(false),setContact(false),setGallery(false),setTestimonials(!testimonials),document.getElementById("sidemenu").style.display="none")}>Testimonials</li>
          <li onClick={()=>(toast.success('Feature under development'),document.getElementById("sidemenu").style.display="none")}>Giving</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavbarComponent