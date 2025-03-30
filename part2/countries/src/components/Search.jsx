const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
