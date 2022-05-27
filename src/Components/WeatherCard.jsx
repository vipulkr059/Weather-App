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
export default function WeatherCard() {
  return (
    <Card>
      <div className="upper">
        <div className="City">Delhi</div>
        <div className="info">
          <span className="temprature">
            {" "}
            <FontAwesomeIcon icon={faTemperatureLow} size="1x" />
            25 c
          </span>
          <span className="iconMain">
            <img src={sunny} alt="" />
            <p className="condition">Sunny</p>
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
            <span>20 C</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faDroplet} />
              Humidity
            </label>
            <span> 20%</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} /> Sunrise
            </label>
            <span> 2am</span>
          </div>
        </div>
        <div className="row2">
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faTemperatureHigh} /> Max Temp
            </label>
            <span> 20 C</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faWind} />
              Wind
            </label>
            <span> 25 km/h</span>
          </div>
          <div>
            <label>
              {" "}
              <FontAwesomeIcon icon={faSun} />
              Sunset
            </label>
            <span> 20 C</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
