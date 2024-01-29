import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useFirebase } from './context/Firebase';

//pages
import NewLogin from './pages/NewLogin';
import Login from './pages/Login';
import Home from './pages/Responsive';

//css
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
   <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/NewLogin" element={<NewLogin/>} />
      
   </Routes>
  );
}

export default App;
