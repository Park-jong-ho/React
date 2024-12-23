import { useState, useEffect } from 'react';
import fetchWeatherData from './api/weatherApi'; // 날씨 API 함수 임포트
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

function App() {
  const [city, setCity] = useState('Seoul'); // 기본 도시를 서울로 설정
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data.current);
      setHourlyForecast(data.hourly);
      setDailyForecast(data.daily);
      setError(null); // 성공적인 데이터 요청 후 에러 초기화
    } catch (err) {
      setError('날씨 정보를 가져올 수 없습니다.');
      setWeatherData(null);
      setHourlyForecast(null);
      setDailyForecast(null);
    }
  };

  useEffect(() => {
    fetchData(); // 처음에 컴포넌트가 렌더링 될 때 데이터 요청
  }, [city]); // city가 변경될 때마다 fetchData 함수 호출

  return (
    <div className="App">
      <h1>날씨 예보</h1>
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="도시 이름 입력"
        />
        <button onClick={fetchData}>검색</button>
      </div>

      {error && <div className="error">{error}</div>}

      {weatherData && <WeatherCard data={weatherData} city={city} />}
      {hourlyForecast && <WeatherDetails title="시간별 예보" data={hourlyForecast} />}
      {dailyForecast && <WeatherDetails title="일일 예보" data={dailyForecast} />}
    </div>
  );
}

export default App;
