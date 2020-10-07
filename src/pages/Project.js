import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import Partials from './partials/Partials'
import ProjectItemScreen from '../screens/ProjectItemScreen'
const Project = ({ history }) => {
    return (
        <div className="App">
            <Partials />
            <header className="App-header">
                <div>
                    공시
                </div>
                <ProjectItemScreen />
            </header>
        </div>

    );
}

export default Project;