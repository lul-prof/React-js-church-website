import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';


import './gallery.css';

const Gallery = () => {

    return (
        <>
            <div className="gbody">
                <div className="head">
                </div>
                <div className="Gheader">
                    <div className="inText">
                        Gallery
                    </div>
                    <a className="joinUs" href="#subscribe">
                        <button>Join Us</button>
                    </a>
                </div>
                <CarouselComponent/>
            </div>
        </>

    )
};

export default Gallery;