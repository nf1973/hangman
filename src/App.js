import Hangman from "./components/Hangman";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hangman />
      <Word />
      <Keyboard />
    </div>
  );
}

export default App;
