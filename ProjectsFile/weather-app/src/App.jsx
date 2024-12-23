import { useState, useEffect } from 'react';
import fetchWeatherData from './api/weatherApi';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [city, setCity] = useState('Seoul');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data.current);
      setError(null);
    } catch (err) {
      setError('날씨 정보를 가져올 수 없습니다.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="App">
      <h1>날씨 예보</h1>
      <SearchBar city={city} setCity={setCity} fetchData={fetchData} />
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <WeatherCard
          data={weatherData}
          city={city}
          lat={weatherData.coord.lat}
          lon={weatherData.coord.lon}
        />
      )}
    </div>
  );
}

export default App;
