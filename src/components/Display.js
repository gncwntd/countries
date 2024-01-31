import Data from "./Data";
import Show from "./Show";

const Display = ({ filteredCountries }) => {
  
  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <Data country={country}></Data>;
  }
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      {filteredCountries.map((country) => (
        <li key={country.name.common} >{country.name.common} <Show country={country}></Show> </li>
        
      ))}
    

    </div>
  );
};

export default Display;
