import React from 'react'
import ReactDOM from 'react-dom/client'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
// index.css
import '../styles/index.css'
// components
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <div className='bg-dark d-flex justify-content-center'>
        <p className='text-light'>Copyright © Your Website 2025</p>
      </div>
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
