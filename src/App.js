import { useState, useEffect } from "react";
import Axios from "axios";
import WeatherCard from "./Components/WeatherCard";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: salmon;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
function App() {
  //Search term state
  const [city, setcity] = useState("Delhi");
  //Fetch API data state
  const [data, setData] = useState([]);

  //function for fetching data from api call
  const getWeather = async (e) => {
    e.preventDefault();
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=Delhi&appid=${process.env.REACT_APP_API_KEY}`
    );
    setData(res.data);
    console.log(res.data);
  };

  return (
    <Container className="App">
      <WeatherCard />
    </Container>
  );
}

export default App;
