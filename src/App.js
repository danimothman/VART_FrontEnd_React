import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainPage from "./pages/MainPage";
// import Logout from "./pages/Logout";
// import TutorLogin from "./pages/TutorLogin";
// import StudentLogin from "./pages/StudentLogin";
// import ShowStudent from "./pages/ShowStudent";
// import ShowTutor from "./pages/ShowTutor";
// import registerStudent from './pages/registerStudent';
// import registerTutor from './pages/registerTutor';
// import FindTutor from './pages/FindTutor';
// import FindStudent from './pages/FindStudent';
// import Test from './pages/Test';
import projectItem from './pages/projectItem';
import Project from './pages/Project';
import About from './pages/About';
import Announcement from './pages/Announcement';
import Service from './pages/Service';
import projectItemCreate from './pages/projectItemCreate';
// import projectItemList from './pages/projectItemList';

import Partials from './pages/partials/partials'

const App = () => {//projectItem
  return (
    <div>
      <Partials />
      <div>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/Logout" component={Logout} />
      <Route path="/TutorLogin" component={TutorLogin} />
      <Route path="/StudentLogin" component={StudentLogin} />
      <Route path="/ShowStudent" component={ShowStudent} />
      <Route path="/FindTutor/:subject/:gender" component={ShowTutor} />
      <Route path="/FindStudent/:subject/:gender" component={ShowStudent} />
      <Route path="/registerStudent" component={registerStudent} />
      <Route path="/registerTutor" component={registerTutor} />
      <Route exact path="/FindTutor" component={FindTutor} />
      <Route exact path="/FindStudent" component={FindStudent} /> */}
        {/* <Route exact path="/Test" component={Test} /> */}
        <Route exact path="/projectItem" component={projectItem} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Announcement" component={Announcement} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/projectItemCreate" component={projectItemCreate} />
        {/* <Route exact path="/projectItemList" component={projectItemList} /> */}
      </div>
    </div>
  )
}

export default App;
