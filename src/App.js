import { useState, useEffect } from "react";
import Axios from "axios";
import WeatherCard from "./Components/WeatherCard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  display: flex;
  background-color: salmon;
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
    border: 3px solid #00b4cc;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }

  .searchTerm:focus {
    color: #00b4cc;
  }

  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #00b4cc;
    background: #00b4cc;
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

  //function for fetching data from api call
  const getWeather = async (e) => {
    e.preventDefault();
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
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
        <button onClick={getWeather} type="submit" class="searchButton">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </Search>
      <WeatherCard data={data} />
    </Container>
  );
}

export default App;
