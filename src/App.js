import FirstComponent from './FirstComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <p>Oops!</p>
    </>
  );
}

export default App;
