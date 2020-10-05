import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";


import { Button } from 'react-bootstrap';


const MainPage = ({ history }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React를 활용한 과외매칭DApp입니다
        </h1>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
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
