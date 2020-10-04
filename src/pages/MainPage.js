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
          React를 활용한 VART 입니다
        </h1>


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


