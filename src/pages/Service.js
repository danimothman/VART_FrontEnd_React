import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import Partials from './partials/partials'
const Service = ({ history }) => {
    return (
        <div className="App">
            <Partials />
            <header className="App-header">
                <div>
                    서비스
                </div>
            </header>
        </div>

    );
}

export default Service;