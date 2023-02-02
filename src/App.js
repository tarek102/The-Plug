import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Campaign from './components/Campaigns';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Campaign />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
