import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Faqs from './pages/Faqs/Faqs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/FAQs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
