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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>
  },
  /*
  {
    path: "/Stats",
    element: <Stats/>
  },
  {
    path: "SignIn",
    element: <Login></Login>
  }
  */
]);


function HomePage(){
  return (
    <>
      <Header></Header>
      <About></About>
    </>
  )
}
function StatsPage(){
  return (
    <>
      <Header></Header>
      <Stats></Stats>
    </>
  )
}
function LoginForm(){
    return (
      <>
        <Header></Header>
        <Login></Login>
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<HomePage/>}></Route>
        <Route path='/Stats' element={<StatsPage/>}></Route>
        <Route path='/SignIn' element={<LoginForm/>}></Route>
      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);
