import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import ProjectItemScreen from '../screens/ProjectItemScreen'
const Project = ({ history }) => {
    return (
        <div className="App">
            <div className="AppAll">
                <header className="AppHeader">
                    <div>
                        공시
                </div>

                </header>
                <div className="AppBody">
                    <ProjectItemScreen />
                </div>
            </div>

        </div>

    );
}

export default Project;