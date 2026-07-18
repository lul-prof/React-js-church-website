/* eslint-disable array-callback-return */
import { useState } from 'react';
import './QuoteComponent.css'
import { QuoteData } from '../../assets/QuoteData'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Quote = () => {
    const transition = {type: 'spring', duration: 2}


    const [selected, setSelected] = useState(0);
    const qlength = QuoteData.length;

    const prevQuote = () => {
        selected===0 ? setSelected(qlength-1) : setSelected(selected-1);
    }
    const nextQuote = () => {
        selected===qlength-1 ? setSelected(0) : setSelected(selected+1);
    }



    return (
        <>
            {
            QuoteData.map((q,i)=>{
                if(i===selected){
                    return(
                        <div id='quote' className='container quote'>
                            {/*--------------------*/}
                            <motion.div className="quote-left"
                            initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{...transition, type:'tween'}}>
                                <div className="quote-left-item">
                                    <span onClick={prevQuote}><FaAngleLeft/></span>
                                </div>
                                <div className="quote-left-img">
                                    <img src={q.img} fetchpriority="high"  referrerPolicy='no-referrer' alt="" />
                                </div>
                                <div className="quote-left-item">
                                    <span onClick={nextQuote}><FaAngleRight/></span>
                                </div>
                            </motion.div>
                             {/*--------------------*/}
                            <motion.div className="quote-right"
                            initial={{opacity: 0, x: 100}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{...transition, type:'tween'}}>
                                <div className="quote-right-header">
                                    <div className="quote-right-header-mid">
                                        <h2>NUGGETS FROM OUR PASTORS</h2>
                                    </div>
                                    <div className="quote-right-header-top">
                                    </div>
                                </div>
                                <div className="quote-right-quote">
                                    <span><FaQuoteLeft size={30}/></span>
                                    <p>{q.quote}</p>
                                    <span className='end'><FaQuoteRight size={30}/></span>
                                </div>
                                <div className="quote-right-details">
                                    <h5>{q.name} - {q.position}</h5>
                                </div>
                                <div className="quote-right-socials">

                                </div>
                            </motion.div>
                        </div>
                    )
                }
            }
        )
        }
        </>
    )
};

export default Quote;