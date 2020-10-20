import React, { useState, render } from 'react';
import '../App.css';
import logo from '../logo.svg';
import ProjectItemScreen from '../screens/ProjectItemScreen'
import ControlledCarousel from '../pages/partials/ControlledCarousel'
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import { Button, Carousel, Container } from 'react-bootstrap';



// render(<ControlledCarousel />);

const MainPage = ({ history }) => {
  return (
    <div className="App">
      <header className="app-header">
        <ControlledCarousel />
      </header>
      <ProjectItemScreen />
    </div>
  );
}
export default MainPage;
