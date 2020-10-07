import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import Partials from './partials/Partials'
const Announcement = ({ history }) => {
    return (
        <div className="App">
            <Partials />
            <header className="App-header">
                <div>
                    공지사항
                </div>
            </header>
        </div>

    );
}

export default Announcement;