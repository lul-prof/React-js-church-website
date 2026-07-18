import React from 'react'
import './JoinPage.css'
import {FaArrowRight, FaFacebookMessenger, FaInstagramSquare, FaLocationArrow, FaMailchimp, FaPhoneSquare, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import {toast} from 'react-hot-toast'

const JoinPage = () => {
  return (
    <>
    <div className="container join">
      {/*--------------------*/}
      <div className="join-left">
        <div className="join-left-top">
          <h2>JOIN US TODAY</h2>
          <p>Feel free to fill out the onboarding form and a member of our team will reach out to you for guidance.</p>
        </div>
        <div className="join-left-mid">
          <div className="join-left-mid-item">
            <div className="join-left-mid-item-left">
             <span><FaPhoneSquare size={35}/></span> 
            </div>
            <div className="join-left-mid-item-right">
              <h6>Contact</h6>
              <p>+234-(000)-00000</p>
            </div>
          </div>
          <div className="join-left-mid-item">
            <div className="join-left-mid-item-left">
             <span><FaMailchimp size={35}/></span> 
            </div>
            <div className="join-left-mid-item-right">
              <h6>Email Address</h6>
              <p>livingword@gmail.com</p>
            </div>
          </div>
          <div className="join-left-mid-item">
            <div className="join-left-mid-item-left">
             <span><FaSearchLocation size={35}/></span> 
            </div>
            <div className="join-left-mid-item-right">
              <h6>Location</h6>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <div className="join-left-bottom">
          <div className="join-left-bottom-item">
            <div className="join-left-bottom-item-left">
              <span><FaInstagramSquare size={35}/></span>
            </div>
            <div className="join-left-bottom-item-right">
              <h6>Instagram</h6>
            </div>
          </div>
          <div className="join-left-bottom-item">
            <div className="join-left-bottom-item-left">
              <span><FaTwitter size={35}/></span>
            </div>
            <div className="join-left-bottom-item-right">
              <h6>Twitter</h6>
            </div>
          </div>
          <div className="join-left-bottom-item">
            <div className="join-left-bottom-item-left">
              <span><FaFacebookMessenger size={35}/></span>
            </div>
            <div className="join-left-bottom-item-right">
              <h6>Facebook</h6>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------*/}
      <div className="join-right">
        <form onSubmit={(e)=>(e.preventDefault())}>
          <div className="join-form-class">
            <label>FullName</label>
            <input type="text" placeholder='Enter your FullName' />
          </div>
          <div className="join-form-class">
            <label>Course</label>
            <input type="text" placeholder='Your Course Of Study' />
          </div>
          <div className="join-form-class">
            <label>Year Of Study</label>
            <input type="text" placeholder='Your year of study' />
          </div>
          <div className="join-form-class">
            <label>Campus</label>
            <input type="text" placeholder='Your Campus' />
          </div>
          <div className="join-form-class">
            <label>Email Address</label>
            <input type="text" placeholder='Your Email Address' />
          </div>
          <div className="join-form-class">
            <label>Phone Number</label>
            <input type="text" placeholder='Home Phone number' />
          </div>
          <div className="join-form-class">
            <label>Message</label>
            <textarea placeholder='Any Message(optional)'></textarea>
          </div>
          <div className="join-form-btn">
            <button onClick={()=>(toast.success('You will be contacted shortly!!!'))}>Join Us<FaArrowRight/></button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default JoinPage