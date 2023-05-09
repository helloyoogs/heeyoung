/*eslint-disable*/
import React from 'react';
import './style/reset.css';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainComponent from "./component/MainComponent";

const App = ()=> {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainComponent />} />

        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
