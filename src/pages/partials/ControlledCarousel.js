
import React, { useState, render } from 'react';
import '../../App.css';
import '../../images/Dawn1.jpg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Carousel, Image } from 'react-bootstrap';

const ControlledCarouselBanel = ({ history }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    className=""
                    src={require("../../images/Dawn1.jpg")}
                    alt="First slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=""
                    src={require("../../images/Dawn2.gif")}
                    alt="Second slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=""
                    src={require("../../images/Dawn3.jpg")}
                    alt="Third slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarouselBanel;