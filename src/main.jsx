import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInSide from './signin';
import Landingpage from './landingpage';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignInSide/>}/>
      <Route path="/" element={<Landingpage/>}/>
    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

