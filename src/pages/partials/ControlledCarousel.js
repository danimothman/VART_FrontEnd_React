
import React, { useState, render } from 'react';
import '../../App.css';
import '../../images/Dawn1.jpg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Carousel } from 'react-bootstrap';

const ControlledCarouselBanel = ({ history }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'../../images/Dawn1.jpg'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../images/Dawn1.jpg/800x400?text=First slide&bg=373940"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../images/Dawn1.jpg/800x400?text=First slide&bg=373940"
                    alt="Third slide"
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