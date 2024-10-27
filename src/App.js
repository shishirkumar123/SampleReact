import logo from './logo.svg';
import './App.css';

function App() {
  console.log('khachar khachar');
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(`API Key: ${apiKey}`);
  console.log(`API URL: ${apiUrl}`);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
        </a>
      </header>
    </div>
  );
}

export default App;
