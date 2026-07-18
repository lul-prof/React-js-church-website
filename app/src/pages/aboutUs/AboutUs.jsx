
import './aboutUs.css'
import YoutubeEmbed from '../../components/YouTubeEmbed/YouTubeEmbed';
import fun from './fun.jpg'
import pmike from './Temp.jpg'
import tfc from './Temp2.jpg'
import vector from './vector.png'
import dapo from './Temp4.jpg'
import ebere from './Temp5.jpg'
import modupe from './Temp7.jpg'
import Scroll from '../../components/ScrollComponent/ScrollComponent';

const AboutUs = () => {
    return (
        <>

            <Scroll/>
            
            <div className="Aheader">
                <div className="inText">
                    About us
                </div>
                <a className="joinUs" href="#subscribe">
                    <button>Join Us</button>
                </a>
            </div>
            <div className="other">
                
                <div className="we">
                    <YoutubeEmbed embedId="WZ2DoaTXXPs" />
                </div>
                <div className="history">
                    <div className="hiscontainer">
                        <h1>Our <span style={{ color: 'purple' }}> History</span></h1>
                        <div className="content">
                            <p>Livingword is a campus-based ministry founded by pastor Yemi Davids in November 1996 in Obafemi Awolowo University, Ile-Ife and was intended to be an independent ministry capable of providing, sustaining and growing itself without dependence on external support. Livingword is a campus-based ministry founded by pastor Yemi Davids in November 1996 in Obafemi Awolowo University, Ile-Ife and was intended to be an independent ministry capable of providing, sustaining and growing itself without dependence on external support. Livingword is a campus-based ministry founded by pastor Yemi Davids in November 1996 in Obafemi Awolowo University, Ile-Ife and was intended to be an independent ministry capable of providing, sustaining and growing itself without dependence on external support. 
                                
                            </p>
                            <img src={fun} alt="" size='200px' />
                        </div>
                    </div>
                </div>
                <div className="mv">
                    <div className="mission">
                        <h1><span style={{ color: 'black' }}>Our</span> Vision</h1>
                        <p>It is our vision to raise covenant giants.</p>
                    </div>
                    <div className="vision">

                        <p>It is our mission to transform the world system to the word of God system.</p>
                        <h1><span style={{ color: 'black' }}>Our</span> Mission</h1>
                    </div>
                </div>
                
                
                <div className="leadership">
                    <h1>Meet Our <span style={{ color: 'purple', fontWeight:'500' }}>Leadership</span></h1>
                    <div className="people">
                        <div className="person">
                            <img src={pmike} alt="" />
                            <span>Michael Oyin-Akinyilade</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Lead Pastor</span>
                        </div>
                        <div className="person">
                        <img src={tfc} alt="" />
                            <span>Funmilayo Coker</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Associate Pastor</span>
                        </div>
                        <div className="person">
                        <img src={vector} alt="" />
                            <span>Oludamiwa Olusanya</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Director of Training</span>
                        </div>
                        <div className="person">
                        <img src={dapo} alt="" />
                            <span>Oladapo Kadeba</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Director of Outreach</span>
                        </div>
                        <div className="person">
                        <img src={ebere} alt="" />
                            <span>Ebere Frederick</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Director of Membership</span>
                        </div>
                        <div className="person">
                        <img src={vector} alt="" />
                            <span>Timilehin Orotoye</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Director of Administration</span>
                        </div>
                        <div className="person">
                        <img src={modupe} alt="" />
                            <span>Modupe Bello</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Director of Worship</span>
                        </div>
                        <div className="person">
                        <img src={vector} alt="" />
                            <span>Adewale Adekunle</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Minister of Missions</span>
                        </div>
                        <div className="person">
                        <img src={vector} alt="" />
                            <span>Priscilla Badmus</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Secretary</span>
                        </div>
                        <div className="person">
                        <img src={vector} alt="" />
                            <span>Temitope</span>
                            <span style={{ color: 'purple', fontWeight:'500' }}>Secretary</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutUs;