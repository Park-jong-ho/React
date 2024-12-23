function WeatherDetails({ title, data }) {
  return (
    <div className="weather-details">
      <h3>{title}</h3>
      <div className="forecast">
        {data.map((item, index) => {
          const time = new Date(item.dt * 1000);
          return (
            <div key={index} className="forecast-item">
              <p>{time.getHours()}시</p>
              <p>기온: {item.temp}°C</p>
              <p>날씨: {item.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherDetails;
