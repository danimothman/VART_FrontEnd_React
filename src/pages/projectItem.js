import React from 'react';
import '../App.css';
import { Button, Container } from 'react-bootstrap';
import ProjectItemDetailPageScreen from '../screens/projectItemDetailPageScreen';
const ProjectItem = ({ history }) => {
    return (
        <div className="App">
            <header className="app-header">
                <div>
                    공시 상세 페이지
                </div>
            </header>
            <ProjectItemDetailPageScreen />
        </div>

    );
}

export default ProjectItem;