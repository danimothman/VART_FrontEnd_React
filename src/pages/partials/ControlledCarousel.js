
import React, { useState, render } from 'react';
import '../../App.css';
import './css/CC.css'
import '../../images/Dawn1.jpg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Carousel, Image } from 'react-bootstrap';

const ControlledCarouselBanel = ({ history }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    className="cc-carousel-item-image"
                    src={require("../../images/Dawn1_1.jpg")}
                    width="2000px"
                    alt="First slide"
                // fluid
                />
                <Carousel.Caption>
                    <h3>글로벌 가상자산 공시 플랫폼</h3>
                    <p>업계를 선도하는 파트너들과 함께합니다.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="cc-carousel-item-image"
                    width="2000px"
                    src={require("../../images/Dawn2_1.jpg")}
                    alt="Second slide"
                // fluid
                />
                <Carousel.Caption>
                    <h3>신뢰와 투명한 공시</h3>
                    <p>세계속 가상자산 시장의 여명이 되겠습니다.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="cc-carousel-item-image"
                    width="2000px"
                    src={require("../../images/Dawn3_1.jpg")}
                    alt="Third slide"
                // fluid
                />
                <Carousel.Caption>
                    <h3>지금 당장 이용하세요!</h3>
                    <p>RIGHT NOW!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarouselBanel;