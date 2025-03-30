const CountryList = ({ countries, setSearch }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          {country.name.common}
          <button onClick={() => setSearch(country.name.common)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
