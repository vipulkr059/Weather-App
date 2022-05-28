import { useState, useEffect } from "react";
import Axios from "axios";
import WeatherCard from "./Components/WeatherCard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  display: flex;
  background: #c6ffdd;
  background: -webkit-linear-gradient(to bottom, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to bottom, #f7797d, #fbd786, #c6ffdd);
  padding: 0.5rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
const Search = styled.div`
  display: flex;
  width: 25%;
  .searchTerm {
    width: 100%;
    border: 3px solid #753a88;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }

  @media (max-width: 800px) {
    width: auto;
  }

  .searchTerm:focus {
    color: #00b4cc;
  }

  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #753a88;
    background: linear-gradient(to top, #753a88, #cc2b5e);
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
`;
function App() {
  //Search term state
  const [city, setcity] = useState();
  //Fetch API data state
  const [data, setData] = useState([]);
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  //Fetching data for current location
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
      console.log(position.coords.latitude);
    });

    const result = await Axios.get(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    setData(result.data);
  };

  //function for fetching data from api call for search term
  const getWeatherCity = async (e) => {
    e.preventDefault();
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    setData(res.data);
    console.log(res.data);
  };

  return (
    <Container className="App">
      <Search className="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="City"
          onChange={(e) => setcity(e.target.value)}
        />
        <button onClick={getWeatherCity} type="submit" class="searchButton">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </Search>
      {typeof data.main != "undefined" ? (
        <WeatherCard data={data} />
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default App;
