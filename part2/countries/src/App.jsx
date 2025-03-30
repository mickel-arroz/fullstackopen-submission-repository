import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(results);
  }, [search, countries]);

  useEffect(() => {
    if (filteredCountries.length === 1) {
      const weatherApiKey = import.meta.env.VITE_WEATHER_KEY;
      const country = filteredCountries[0];
      axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: country.capitalInfo.latlng[0],
            lon: country.capitalInfo.latlng[1],
            appid: weatherApiKey,
          },
        })
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [filteredCountries]);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
      />
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails
          country={filteredCountries[0]}
          weather={weather}
        />
      ) : (
        <CountryList
          countries={filteredCountries}
          setSearch={setSearch}
        />
      )}
    </>
  );
}

export default App;
