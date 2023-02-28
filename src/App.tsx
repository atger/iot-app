import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import GMS from './pages/GMS';
import AMS from './pages/AMS';
import Navigation from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/gms" element={<GMS />} />
        <Route path="/ams" element={<AMS />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
