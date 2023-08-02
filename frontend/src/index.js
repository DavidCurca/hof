import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Stats from './components/stats/stats';
import Person from './components/person/person';
import NotFound from './components/notFound/notFound';
import NewResult from './components/newResult/newResult';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
