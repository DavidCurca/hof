import logo from './logo.svg';
import React from 'react';
import Login from './components/login/login';
import './styles/App.scss';
import Header from './components/header/header';
import HofError from './components/hofError/hofError';
import Home from './components/home/home';
import About from './components/about/about';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Stats from './components/stats/stats';
import Person from './components/person/person';
import NotFound from './components/notFound/notFound';
import NewResult from './components/newResult/newResult';
import Contest from './components/contest/contest';
function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch("/api/ping")
      .then((res) => {
          setData(res.status)
      })
  }, []);
  console.log("data is" + data);

  return (
    <BrowserRouter>
      <Header/>
     {
      /*
     {data != 200 && <HofError errorMessage={"cannot connect to the database"}></HofError>}
     */} 
     {1 &&
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/stats' element={<Stats/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/stats/contest' element={<Contest></Contest>}></Route>
          <Route path='/person' element={<Person/>}></Route>
          <Route path='/new_result' element={<NewResult/>}></Route>
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
