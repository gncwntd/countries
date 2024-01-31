let Search = (countries,search) => {
    // const filteredCountries = countries.filter(country => country.name.common.includes(search) === true)
    const filteredCountries = countries.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.name.common.toLowerCase().includes(search);
      })
    return filteredCountries
}

export default Search;

