import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {assets} from '../../assets/assets'
import './CarouselComponent.css'

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows  autoPlay dynamicHeight={"800px"} showThumbs={false}>
                <div className='corousel-img'>
                    <img src={assets.corouselImage6} alt='image1' />
                </div>
                <div className='corousel-img'>
                    <img src={assets.corouselImage2} alt='image1' />
                </div>
                <div className='corousel-img'>
                    <img src={assets.corouselImage3} alt='image1' />
                </div>
                <div className='corousel-img'>
                    <img src={assets.corouselImage4} alt='image1' />
                </div>
                <div className='corousel-img'>
                    <img src={assets.corouselImage5} alt='image1' />
                </div>
            </Carousel>
        </div>
    );
}