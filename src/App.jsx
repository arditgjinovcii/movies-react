import { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Search from './components/Search';

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Search setResults={setResults} />
      <Results results={results} />
    </>
  );
}

export default App;
