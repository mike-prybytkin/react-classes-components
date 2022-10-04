import AboutUs from 'pages/AboutUs/AboutUs';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import NavBar from 'components/navbar/navBar';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/notFound" element={<Page404 />} />
          <Route path="/*" element={<Navigate to="/notFound" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;