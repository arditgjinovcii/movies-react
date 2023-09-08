import { useState } from "react";

const API_KEY = 'xxxxxxxx';

function Search({ setResults }) {
  const [search, setSearch] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setResults(data.Search))
      .catch(err => console.error(err));

    setSearch('');
  };

  return (
    <>
      <form className="form form-control" onSubmit={submitForm}>
        <label className="label" htmlFor="movie">Kerko filmin</label>
        <input
          type="text"
          name="movie"
          onInput={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Kerko</button>
      </form>
    </>
  );
}

export default Search;
