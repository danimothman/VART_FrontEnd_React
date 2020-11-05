import React from 'react';
import '../App.css';
import { Button, Container } from 'react-bootstrap';
import ProjectItemScreen from '../screens/ProjectItemScreen';
import Banner from './partials/banner'
const Project = ({ history }) => {
    return (
        <div className="App">
            <header className="app-header">
                <Banner />
                <h3>공시리스트</h3>
                <p>공시정보 리스트 입니다.</p>
            </header>
            <ProjectItemScreen />

        </div>

    );
}

export default Project;