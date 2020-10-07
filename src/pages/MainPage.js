import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import Partials from './partials/Partials'

import { Button } from 'react-bootstrap';


const MainPage = ({ history }) => {
  return (
    <div className="App">
      <Partials />
      <header className="App-header">

        <Button variant="info" size="lg" onClick={() => {
          history.push('/projectItem')
        }}>
          projectItem
        </Button>

        <Button variant="info" size="lg" onClick={() => {
          history.push('/Test')
        }}>
          Test
        </Button>

      </header>
    </div>

  );
}

export default MainPage;
