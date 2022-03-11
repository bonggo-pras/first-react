
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import logo from './logo.svg';

import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/product' element={< Product />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;