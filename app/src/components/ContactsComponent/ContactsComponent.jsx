import React from 'react'
import { FaArrowLeft, FaArrowRight, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import './ContactsComponent.css'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const ContactsComponent = () => {
    const transition = {type: 'spring', duration: 2}
  return (
    <>
    <div id='contact' className="container contacts">
        {/*-------------------------*/}
        <motion.div className="contacts-left"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, type:'tween'}}
        >
            <div className="contacts-left-top">
                <h2>CONTACT US</h2>
                <p>Feel free to reach out for help, prayers and consultation at any time of the day. Our support team will get back to you as soon as possible</p>
            </div>
            <div className="contacts-left-bottom">
                <div className="contacts-left-bottom-item">
                    <div className="contacts-left-bottom-item-left">
                        <span><FaInstagramSquare size={25}/></span>
                    </div>
                    <div className="contacts-left-bottom-item-right">
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/livingwordoau/">Instagram</a>
                    </div>
                </div>
                <div className="contacts-left-bottom-item">
                    <div className="contacts-left-bottom-item-left">
                        <span><FaFacebookSquare size={25}/></span>
                    </div>
                    <div className="contacts-left-bottom-item-right">
                        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/lwfoau/">Facebook</a>
                    </div>
                </div>
                <div className="contacts-left-bottom-item">
                    <div className="contacts-left-bottom-item-left">
                        <span><FaTwitterSquare size={25}/></span>
                    </div>
                    <div className="contacts-left-bottom-item-right">
                        <a target='_blank' rel="noreferrer" href="https://twitter.com/livingwordoau">Twitter</a>
                    </div>
                </div>
                <div className="contacts-left-bottom-item">
                    <div className="contacts-left-bottom-item-left">
                        <span><FaYoutubeSquare size={25}/></span>
                    </div>
                    <div className="contacts-left-bottom-item-right">
                        <a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UCLI0kZ-vI3ppaDWZo1ay0Bg">YouTube</a>
                    </div>
                </div>
            </div>
        </motion.div>
        {/*-------------------------*/}
        <motion.div className="contacts-right"
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transition, type:'tween'}}
        >
            <form onSubmit={(e)=>(e.preventDefault())}>
                <div className="form-class">
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" placeholder='Enter Your FullName' />
                </div>
                <div className="form-class">
                    <label htmlFor="fullname">Email Address</label>
                    <input type="text" placeholder='Enter Your Email Address' />
                </div>
                <div className="form-class">
                    <label htmlFor="fullname">Phone Number</label>
                    <input type="text" placeholder='Enter Your Phone Number' />
                </div>
                <div className="form-class">
                    <label htmlFor="fullname">Message</label>
                    <input type="text" placeholder='Write Your Message Here' />
                </div>
                <div className="form-btn">
                    <button onClick={()=>(toast.success('Message Received!!!'))}>Send Message<FaArrowRight/></button>
                </div>
            </form>
        </motion.div>
    </div>
    </>
  )
}

export default ContactsComponent