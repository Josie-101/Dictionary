
import Dictionary from "./Dictionary.jpg"
import './App.css';
import WordSearch from "./WordSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={Dictionary}
            className="App-logo img-fluid"
            alt="Dictionary"
          />
        </header>
        <main>
          <WordSearch defaultKeyword="star"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Jo B</small>
        </footer>
      </div>
    </div>
  );
}


