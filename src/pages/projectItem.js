import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import { Button } from 'react-bootstrap';
import ProjectItemScreen from '../screens/ProjectItemScreen'
const projectItem = ({ history }) => {
    return (
        <div className="App">
            <header className="App-header">
                <ProjectItemScreen />
            </header>
        </div>

    );
}

export default projectItem;