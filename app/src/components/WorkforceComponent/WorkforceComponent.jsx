import { useNavigate } from 'react-router-dom';
import { workForce } from '../../assets/assets';
import './WorkforceComponent.css'
import { motion } from 'framer-motion';


const Workforce = () => {
    const transition = {type: 'spring', duration: 2}
    const navigate=useNavigate();
    return (
        <>
        <div className="container workforce">
            <motion.div className="workforce-header"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, type:'tween'}}
            >
                <h2>ITS ALL ABOUT IMPACT</h2>
                <p>We have been actively involved in impacting positivity throughout our brotherhood</p>
            </motion.div>
            <motion.div className="workforce-class"
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, type:'tween'}}
            >
                {
                    workForce.map((work)=>(
                        <div key={work._id} className="work">
                            <div className="work-text">
                                <p>{work.text}</p>
                                <button onClick={()=>(navigate('/aboutUs'))}>Read More</button>
                            </div>
                            <div className="work-img">
                                <img src={work.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
        </>
    )
};

export default Workforce;