

import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import { Button } from 'react-bootstrap';
import HelloScreen from '../screens/HelloScreen'
import CounterScreen, { } from '../screens/CounterScreen'
import UserScreen1 from '../screens/UserScreen'
import ProjectItemScreen from '../screens/ProjectItemScreen'
const projectItem = ({ history }) => {
    return (
        <div className="App">
            <header className="App-header">

                <h1>
                    React를 활용한 과외매칭DApp입니다
                </h1>
                <br></br>
                <img src={logo} className="App-logo" alt="logo" />
                <br></br>
                <ProjectItemScreen />

            </header>
        </div>

    );
}

export default projectItem;