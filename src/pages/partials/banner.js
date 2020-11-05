
import React, { useState, render } from 'react';
import '../../App.css';
import './css/CC.css'
import '../../images/Dawn1.jpg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Carousel, Image } from 'react-bootstrap';

const banner = ({ history }) => {
    return (
        <div>
            <Image
                className="cc-carousel-item-image"
                src={require("../../images/VARTbanner.png")}
                width="1500px"
                alt="First slide"
                fluid
            />
        </div>

    );
}

export default banner;
// 익스포트 적용
// import Banner from './partials/banner'