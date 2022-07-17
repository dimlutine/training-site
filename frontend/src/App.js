import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import WebDev from './pages/WebDev';
import Python from './pages/WebDev/Python';
import JavaScript from './pages/WebDev/JavaScript';

import AppDev from './pages/AppDev';
import CyberSec from './pages/CyberSec';
import DevOps from './pages/DevOps';
import Hardware from './pages/Hardware';
import Software from './pages/Software';
import Footer from './components/Footer';
import CSS from './pages/WebDev/CSS';
import HTML from './pages/WebDev/HTML';
import Ruby from './pages/WebDev/Ruby';
import Swift from './pages/WebDev/Swift';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/webdev' element={<WebDev />} />
            <Route path='/python' element={<Python />} />
            <Route path='/javascript' element={<JavaScript />} />
            <Route path='/css' element={<CSS />} />
            <Route path='/html' element={<HTML />} />
            <Route path='/ruby' element={<Ruby />} />
            <Route path='/swift' element={<Swift />} />
            <Route path='/appdev' element={<AppDev />} />
            <Route path='/cybersec' element={<CyberSec />} />
            <Route path='/devops' element={<DevOps />} />
            <Route path='/hardware' element={<Hardware />} />
            <Route path='/software' element={<Software />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
