import { FaFacebook, FaInstagram, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import './WelcomeComponents.css'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {

    const transition = {type: 'spring', duration:1};
    const navigate=useNavigate()

    return (
        <div className="container welcome">
            <motion.div className="welcome-header"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, type:'tween'}}
            >
                <div className="welcome-header-top">
                    <h2>WELCOME HOME</h2>
                </div>
                <div className="welcome-header-mid">
                    <span>{<FaQuoteLeft size={30} color={'purple'} />}</span>
                    <p>This is Livingword fellowship, we have a mandate by God to raise impactful individuals in today's generation and generations to come and we have been committed to this mission for over 25 years. Join Us today and see the Giant in you find expression. We also encourage you to engage our social media via the following links</p>  
                    <span>{<FaQuoteRight size={30} color={'purple'} />}</span>
                </div>
            </motion.div>
            <motion.div className="welcome-body"
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{...transition, type:'tween'}}
            >
                <div className="welcome-body-class">
                    <div className="welcome-body-class-text">
                        <span>We Are Young</span>
                        <button className='btn-1' onClick={()=>(navigate('/join'))}>Join us</button>
                    </div>
                    <div className="welcome-body-class-img">
                        <img src="https://images.unsplash.com/photo-1637615739656-ca10c4285c88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" alt="" />
                    </div> 
                </div>
                <div className="welcome-body-class">
                    <div className="welcome-body-class-text">
                        <span>We Are Focused</span>
                        <button onClick={()=>(navigate('/gallery'))}>Read More</button>
                    </div>
                    <div className="welcome-body-class-img">
                        <img src="https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" alt="" />
                    </div> 
                </div>
                <div className="welcome-body-class">
                    <div className="welcome-body-class-text">
                        <span>We Are Disciplined</span>
                        <button onClick={()=>(navigate('/aboutUs'))}>About us</button>
                    </div>
                    <div className="welcome-body-class-img">
                        <img src="https://plus.unsplash.com/premium_photo-1734014583998-00bfab054f29?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0" alt="" />
                    </div>
                </div>
                <div className="welcome-body-class">
                    <div className="welcome-body-class-text">
                        <span>Worship with us</span>
                        <button onClick={()=>(navigate('/join'))}>Join us</button>
                    </div>
                    <div className="welcome-body-class-img">
                        <img src="https://images.unsplash.com/photo-1675099074138-92b303c1868c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0" alt="" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

export default Welcome;