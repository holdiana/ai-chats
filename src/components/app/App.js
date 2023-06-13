// import logo from './logo.svg';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Hallo world</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ai-chats-app
        </a>
      </header>
    </div>
  );
}

export default App;
