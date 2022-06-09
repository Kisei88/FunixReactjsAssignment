import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter }  from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
