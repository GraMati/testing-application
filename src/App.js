import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cars from './Cars';
import CarDetails from './CarDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;