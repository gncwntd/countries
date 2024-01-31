import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Display from "./components/Display";
function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const getCountries = () => {
    axios
      .get("http://localhost:3001/countries")
      .then((response) => setCountries(response.data));
  };
  useEffect(getCountries,[]);

  const filteredCountries = search === "" ? "Too many matches, specify another filter" : Search(countries, search);
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="App">
      find countries <input onChange={handleSearch}></input>
      <Display filteredCountries={filteredCountries}></Display>
    </div>
  );
}

export default App;
