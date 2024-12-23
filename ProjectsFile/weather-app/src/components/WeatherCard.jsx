
function WeatherCard({ data, city }) {
  return (
    <div className="weather-card">
      <h2>{city}의 현재 날씨</h2>
      <div className="weather-info">
        <p>기온: {data.temp}°C</p>
        <p>습도: {data.humidity}%</p>
        <p>날씨: {data.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
