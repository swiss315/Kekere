import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from "./Pages/landingPage";
import Register from "./Pages/Register";
import Layout from "./Components/Dashboard/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='register' element={<Register />} />
          <Route path='/*' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
