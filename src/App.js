import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter as Router }  from 'react-router-dom';


function App(props) {

  return (
    <Router>
        <Main/>
    </Router>
  );
}

export default App;
