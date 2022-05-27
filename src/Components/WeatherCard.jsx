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
  const temp = Math.floor(city?.main?.temp - 273);
  const MinTemp = Math.floor(city?.main?.temp_min - 273);
  const MaxTemp = Math.floor(city?.main?.temp_max - 273);
  return (
    <Card>
      <div className="upper">
        <div className="City" style={{ fontSize: "2rem" }}>
          {city.name}, {city.sys.country}
        </div>
        <div className="info">
          <span className="temprature">
            <FontAwesomeIcon icon={faTemperatureLow} />
            {`${temp}°C`}
          </span>
          <span className="iconMain">
            <img src={sunny} alt="" />
            <p className="condition">{city.weather[0].main}</p>
          </span>
        </div>
      </div>
      <div className="lower">
        <div className="row1">
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faTemperatureLow} /> Min Temp
            </label>
            <span>{`${MinTemp}°C`}</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faDroplet} />
              Humidity
            </label>
            <span> {city.main.humidity}%</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} /> Sunrise
            </label>
            <span>
              {" "}
              {new Date(city.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </span>
          </div>
        </div>
        <div className="row2">
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faTemperatureHigh} /> Max Temp
            </label>
            <span> {`${MaxTemp}°C`}</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faWind} />
              Wind
            </label>
            <span> {city.wind.speed}</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} />
              Sunset
            </label>
            <span>
              {" "}
              {new Date(city.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
