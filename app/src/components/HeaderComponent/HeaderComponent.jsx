import { useNavigate } from "react-router-dom";
import "./HeaderComponent.css";
import {motion} from 'framer-motion'

const Header = () => {
    const transition = {type: 'spring', duration: 1};
    const navigate=useNavigate()
    return (
        <>
        <div
        className="headerContainer">
            <motion.div 
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, type:'tween'}}
            className="inTextContainer">
                Raising Covenant giants
                <span>For over 25 years...</span>
            </motion.div>
            <motion.div className="join-btn"  
            initial={{x:100}}
            whileInView={{x:0}}
            transition={{...transition, type:'tween'}}
            >
                <button onClick={()=>(navigate('/join'))}>Join Us</button>
            </motion.div>
            

        </div>
        </>
    )
};

export default Header;