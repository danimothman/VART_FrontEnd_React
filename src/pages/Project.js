import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import ProjectItemScreen from '../screens/ProjectItemScreen'
const Project = ({ history }) => {
    return (
        <div className="App">
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