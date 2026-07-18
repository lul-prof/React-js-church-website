import { useNavigate } from "react-router-dom";
import "./FooterComponent.css";
import {toast} from 'react-hot-toast'

const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="container footer">
      {/*---------------------*/}
      <div className="footer-top">
        <div className="footer-top-class">
          <div className="footer-top-class-header">
            <h4>WORSHIP WITH US</h4>
          </div>
          <div className="footer-top-class-list">
            <ul>
              <li>Ifeloju CICS, banking area</li>
              <li>Obafemi Awolowo University</li>
              <li>Ile-Ife, Osun State</li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="footer-top-class">
          <div className="footer-top-class-header">
            <h4>QUICK LINKS</h4>
          </div>
          <div className="footer-top-class-list">
            <ul>
              <li onClick={()=>(navigate('/'))}>Home</li>
              <li onClick={()=>(navigate('/aboutUs'))}>About Us</li>
              <li onClick={()=>(navigate('/'))}>Contact Us</li>
              <li onClick={()=>(navigate('/gallery'))}>Gallery</li>
              <li onClick={()=>(toast.success('Feature under development'))}>Events</li>
              <li onClick={()=>(toast.success('Feature under development'))}>Giving</li>
              <li onClick={()=>(navigate('/join'))}>Prayer Request</li>
            </ul>
          </div>
        </div>

        <div className="footer-top-right">
          <div className="footer-top-right-header">
            <h4>OUR NEWSLETTER</h4>
          </div>
          <div className="footer-top-right-form">
            <form onSubmit={(e)=>(e.preventDefault())}>
              <div className="form-class">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="form-btn">
                <button type="submit" onClick={()=>(toast.success('You have Subscribed to our Newsletter'))}>SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      {/*---------------------*/}
      <div className="footer-mid">
        <h6>&copy;{new Date().getFullYear()} LivingWordChurch</h6>
      </div>
    </div>
    
  );
};

export default Footer;

