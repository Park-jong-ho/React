import { useEffect } from "react"
import Search from "./Search"
import { axios } from 'axios';
import PopularMovies from "./PopularMovies";
import { useDispatch } from "react-redux";
import { popularMovieAction } from "../redux_modules/MovieReducer";


const Main = () => {

  // 상태 관리
  const dispatch = useDispatch()
  // API 조회

  // 인기 영화 리스트 조회 함수
  const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    await axios
      .get(url, {
        params: {
          api_key: "1a48a4bf38a69a3555e61ff670f158f1",
        },
      })
      // 통신 성공시
      .then((res) => {
        console.log(res);
        // 데이터 저장(상태 저장)
        dispatch(popularMovieAction(res.data.results))
      })
      // 통신 실패시
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  // 이벤트 헨들러 생성


  // 컴포넌트 렌더링시 API 호출

  return (
    <main id="main">
      <Search />
      <PopularMovies />
    </main>
  )
}

export default Main