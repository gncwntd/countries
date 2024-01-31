import axios from "axios";
import { useEffect, useState } from "react";

const Data = ({ country }) => {
  const [wheather,setWheather] = useState();

  const { WHEATHER_KEY } = process.env;
  const latLong = Object.keys(country.capitalInfo).map((key) => [
    key,
    country.capitalInfo[key],
  ]);
  const getWheather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&appid=ae8e1e7a427a5a0777d02d80c38a8195`
      )
      .then((res) => setWheather(res.data));
  }
  useEffect(getWheather);
  console.log(wheather)
  const languages = Object.keys(country.languages).map((key) => [
    key,
    country.languages[key],
  ]);
  return (
    <div>
      <h1>{country.name.common}</h1>
      Capital : {country.capital} <br />
      Area : {country.area}
      <h3>Languages : </h3>
      {languages.map((country) => (
        <li>{country[1]}</li>
      ))}
      <br />
      <img alt="Flag" src={country.flags.png}></img>
      <h2>Wheather in {country.capital}</h2>
      {/* {wheather.base} */}
    </div>
  );
};

export default Data;
