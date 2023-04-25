import React,{useState} from 'react'
//import Slides from './Slides';
//import SlideData from './SlideData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderData from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
/*
import Photo1 from '../images/網站照片/主菜照片/三杯雞肉.jpg';
import Photo2 from '../images/網站照片/主菜照片/宮保雞丁.jpg';
import Photo3 from '../images/網站照片/主菜照片/泰式雞排.jpg';
import Photo4 from '../images/網站照片/主菜照片/滷排骨.jpg';
import Photo5 from '../images/網站照片/主菜照片/炸排骨.jpg';
import Photo6 from '../images/網站照片/主菜照片/炸雞排.jpg';
import Photo7 from '../images/網站照片/主菜照片/炸雞腿.jpg';
import Photo8 from '../images/網站照片/主菜照片/煎鱈魚.jpg';
import Photo9 from '../images/網站照片/主菜照片/爌肉.jpg';
import Photo10 from '../images/網站照片/主菜照片/蔥爆牛肉.jpg';
*/
import './CardCarousel.css';

const CardCarousel = ({slides}) =>{
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                )}
              </div>
            );
          })}
        </section>
      );
    };
 
export default CardCarousel;