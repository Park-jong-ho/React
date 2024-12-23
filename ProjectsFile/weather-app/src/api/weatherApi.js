import axios from 'axios';

// OpenWeatherMap API 키 가져오기
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;  // .env 파일에서 API 키를 불러옴

// 날씨 데이터를 가져오는 함수
const fetchWeatherData = async (city) => {
  const latLonUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // 도시의 위도와 경도 정보를 가져옴
    const response = await axios.get(latLonUrl);
    const { lat, lon } = response.data.coord;

    // 날씨, 시간별 예보, 일일 예보를 가져오기 위한 URL
    const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=metric`;

    // 날씨 데이터, 시간별 예보, 일일 예보 모두 가져오기
    const weatherResponse = await axios.get(weatherUrl);
    return {
      current: weatherResponse.data.current,
      hourly: weatherResponse.data.hourly,
      daily: weatherResponse.data.daily
    };
  } catch (error) {
    throw new Error("날씨 정보를 가져오는 데 실패했습니다.");
  }
};

export default fetchWeatherData;
