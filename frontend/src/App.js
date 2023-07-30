import logo from './logo.svg';
import React from 'react';
import Login from './components/login/login';
import './styles/App.scss';
import Header from './components/header/header';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/ping")
      .then((res) => setData(res.status))
  }, []);

  return (
      <Header></Header>
  );
}

export default App;
