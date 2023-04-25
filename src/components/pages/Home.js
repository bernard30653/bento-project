import React from 'react';
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/cover_photo_test.jpg';
import './Home.css';
import ImageSlider from '../ImageSlider';
import Donate from '../Donate';
import Stats from '../Stats';
import CardCarousel from '../CardCarousel';
import News from '../News';
import SliderData from '../SliderData';
function Home() {
    return (
        <div>
            <CardCarousel slides={SliderData}/>
            <Donate />
            <Stats/>
        </div>
    )
}

export default Home;
