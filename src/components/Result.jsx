function Result({ title, poster, year }) {
  return (
    <div className="card">
      <img src={poster}></img>
      <h2>
        {title} ({year})
      </h2>
    </div>
  );
}

export default Result;
