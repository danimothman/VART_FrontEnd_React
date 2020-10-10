import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import Partials from './partials/partials'
const About = ({ history }) => {
    return (
        <div className="App">
            <Partials />
            <header className="App-header">
                <div>
                    소개
                </div>
            </header>
        </div>

    );
}

export default About;