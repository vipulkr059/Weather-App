import { Card } from "./styling/CardStyle";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faTemperatureLow,
  faTemperatureHigh,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sunny from "../Assets/static/day.svg";

export default function WeatherCard({ data }) {
  const city = data;
  const temp = city ? Math.floor(city?.main?.temp) : "default";
  const MinTemp = city ? Math.floor(city?.main?.temp_min) : "default";
  const MaxTemp = city ? Math.floor(city?.main?.temp_max) : "default";
  const image = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  return (
    <Card>
      <div className="upper">
        <div className="City" style={{ fontSize: "2rem" }}>
          {city ? city.name : "default"}, {city ? city.sys.country : "default"}
        </div>
        <div className="info">
          <span className="temprature">
            <FontAwesomeIcon icon={faTemperatureLow} />
            {`${temp}°C`}
          </span>
          <span className="iconMain">
            <img src={image} alt={sunny} />
            <p className="condition">
              {city ? city.weather[0].main : "default"}
            </p>
          </span>
        </div>
      </div>
      <div className="lower">
        <div className="row1">
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faTemperatureLow} /> Min Temp:
            </label>
            <span> {`${MinTemp}°C`}</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faDroplet} />
              &nbsp;Humidity:
            </label>
            <span> {city ? city.main.humidity : "default"}%</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} /> Sunrise:
            </label>
            <span>
              {" "}
              {city
                ? new Date(city.sys.sunrise * 1000).toLocaleTimeString("en-IN")
                : "default"}
            </span>
          </div>
        </div>
        <div className="row2">
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faTemperatureHigh} /> Max Temp:
            </label>
            <span> {`${MaxTemp}°C`}</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faWind} />
              &nbsp;Wind:
            </label>
            <span> {city ? city.wind.speed : "default"} </span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} />
              &nbsp;Sunset:
            </label>
            <span>
              {" "}
              {city
                ? new Date(city.sys.sunset * 1000).toLocaleTimeString("en-IN")
                : "default"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
