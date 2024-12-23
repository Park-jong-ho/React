// 날씨 상태에 맞는 배경 이미지 선택 함수
const getBackgroundImage = (weatherType) => {
  switch (weatherType) {
    case 'Clear':
      return 'url(https://source.unsplash.com/1600x900/?sunny)';
    case 'Rain':
      return 'url(https://source.unsplash.com/1600x900/?rain)';
    case 'Clouds':
      return 'url(https://source.unsplash.com/1600x900/?cloudy)';
    case 'Snow':
      return 'url(https://source.unsplash.com/1600x900/?snow)';
    default:
      return 'url(https://source.unsplash.com/1600x900/?weather)';
  }
};

function WeatherCard({ data, city, lat, lon }) {
  const weatherType = data.weather[0].main;
  const backgroundImage = getBackgroundImage(weatherType);

  return (
    <div className="weather-card" style={{ backgroundImage }}>
      <div className="weather-card-content">
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
        {/* 지도 이미지 추가 */}
        <div className="map">
          <h3>{city}의 위치</h3>
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=600x300&markers=color:red%7C${lat},${lon}&key=YOUR_GOOGLE_MAPS_API_KEY`}
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
