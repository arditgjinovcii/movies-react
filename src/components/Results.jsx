import Result from "./Result";

function Results({ results }) {
  return (
    <>
      <div className="card-container">
        {results.map((result) => (
          <Result
            key={result.imdbID}
            title={result.Title}
            poster={result.Poster}
            year={result.Year}
          />
        ))}
      </div>
    </>
  );
}

export default Results;
