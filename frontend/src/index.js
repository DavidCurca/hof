import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Stats from './components/Stats/Stats';
import Person from './components/person/person';
import NotFound from './components/notFound/notFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/stats' element={<Stats/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/person' element={<Person/>}></Route>
      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);
