import React,{useState} from 'react'

//import Slides from './Slides';
import Photo1 from '../images/網站照片/主菜照片/宮保雞丁.jpg';
import Photo2 from '../images/網站照片/主菜照片/三杯雞肉.jpg';
import Photo3 from '../images/網站照片/主菜照片/泰式雞排.jpg';
import Photo4 from '../images/網站照片/主菜照片/滷排骨.jpg';
import './ImageSlider.css';

//import ReactCardSlider from 'react-card-slider-component';
//import {Carousel} from '3d-react-carousal';  <Carousel slides={slides}  autoplay={true} interval={3000}/>

function importAllImages(r) {
    return r.keys().map(r);
}



function ImageSlider() {
    
    let slides = [
        <img src={Photo1} alt="slide1" className="sliderimg"/>,
        <img src={Photo2} alt="slide2" className="sliderimg"/>,
        <img src={Photo3} alt="slide3" className="sliderimg"/>,
        <img src={Photo4} alt="slide4" className="sliderimg"/>,
    ]
    return (
        <>
        <div className="carousel-outer">
            <h2 className="slider-header">媒體報導</h2>
        </div>
        
                    <div>正忠便當</div>
                    <div>你快速方便的好選擇</div>
        </>
    )   
}

export default ImageSlider;
