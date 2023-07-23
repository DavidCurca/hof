import logo from './logo.svg';
import Header from './components/header/header';
import Login from './components/login/login';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}

export default App;
