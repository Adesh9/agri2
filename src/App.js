import { Routes, Route } from 'react-router-dom';


//pages
import NewLogin from './pages/NewLogin';
import Login from './pages/Login';
import Home from './pages/Home';
import Intro from './pages/Intro';

//css
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {

  return (
   <Routes>
      <Route path="/" element={<Intro/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/NewLogin" element={<NewLogin/>} />
      
   </Routes>
  );
}

export default App;
