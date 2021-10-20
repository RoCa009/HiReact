import logo from './WiFi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hola mundo!!!</p>
      <p>
          Si funciona, es por que lo hice bien y por que tienes Wi-Fi : )
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Este Hola Mundo fue hecho con React
        </a>
      </header>
    </div>
  );
}

export default App;
