
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
          <WordSearch defaultKeyword="star" />
        </main>
        <footer className="footer">
          This app was coded by Jo and is open sourced on{" "}
          <a
            href="https://github.com/Josie-101/Dictionary"
            target="blank"
            rel="noreferrer"
          >
            Github
          </a>💖
        </footer>
      </div>
    </div>
  );
}


