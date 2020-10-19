import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Container } from 'react-bootstrap';
import ProjectItemScreen from '../screens/ProjectItemScreen'
const Project = ({ history }) => {
    return (
        <div className="App">
            <header className="AppHeader">
                <div>
                    공시
                </div>
            </header>
            <ProjectItemScreen />

        </div>

    );
}

export default Project;