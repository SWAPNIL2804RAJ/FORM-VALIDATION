// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './Components/FormPage';
import SuccessPage from './Components/SuccessPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
