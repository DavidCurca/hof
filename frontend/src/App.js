import logo from './logo.svg';
import React from 'react';
import Login from './components/login/login';
import './styles/App.scss';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/ping")
      .then((res) => setData(res.status))
  }, []);

  return (
    <div className="App">
      <div style={{'display': 'flex', 'padding': '10px', 'fontSize': '23px'}}>
        {
        /*
        <p style={{'marginRight': '10px'}}>api status: </p>
        {(data == 200) && <span style={{'fontWeight': '900'}}>funcitonal</span>}
        {(data != 200) && <span style={{'fontWeight': '900'}}>unreachable</span>}
        */
        }
      </div>
      {(data == 200) && <Login/>}
    </div>
  );
}

export default App;
