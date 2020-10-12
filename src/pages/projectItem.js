import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import { Button } from 'react-bootstrap';
// import HelloScreen from '../screens/HelloScreen'
// import CounterScreen, { } from '../screens/CounterScreen'
// import UserScreen1 from '../screens/UserScreen'
import Partials from './partials/partials'
import ProjectItemScreen from '../screens/ProjectItemScreen'
const projectItem = ({ history }) => {
    return (
        <div className="App">
            <Partials />
            <header className="App-header">
                <ProjectItemScreen />
            </header>
        </div>

    );
}

export default projectItem;