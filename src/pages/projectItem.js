import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Container } from 'react-bootstrap';
import ProjectItemDetailPageScreen from '../screens/ProjectItemDetailPageScreen';
const ProjectItem = ({ history }) => {
    return (
        <div className="App">
            <header className="app-header">
                <div>
                    공시 상세 페이지
                </div>
            </header>
            <div>
                <ProjectItemDetailPageScreen />
            </div>
        </div>

    );
}

export default ProjectItem;