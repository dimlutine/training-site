import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Python from './pages/Python';
import JavaScript from './pages/JavaScript';
import WebDev from './pages/WebDev';
import AppDev from './pages/AppDev';
import CyberSec from './pages/CyberSec';
import DevOps from './pages/DevOps';
import Hardware from './pages/Hardware';
import Software from './pages/Software';

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
            <Route path='/appdev' element={<AppDev />} />
            <Route path='/cybersec' element={<CyberSec />} />
            <Route path='/devops' element={<DevOps />} />
            <Route path='/hardware' element={<Hardware />} />
            <Route path='/software' element={<Software />} />
            <Route path='/python' element={<Python />} />
            <Route path='/javascript' element={<JavaScript />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
