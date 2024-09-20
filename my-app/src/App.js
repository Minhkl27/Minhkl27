import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first app!
        </p>
        <p>Nguyen Van Minh</p>
        <label for = 'text'>Input </label>
        <input type = "text" placeholder='Nhap van ban o day' id = 'text'></input>
      </header>
    </div>
  );
}

export default App;
