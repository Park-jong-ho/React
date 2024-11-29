import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./page/Main"));
const Detail = lazy(() => import("./page/Detail"));
const Search = lazy(() => import("./page/Search"));

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
            navigate(`/search?animal=${event.target.value}`)
          }}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          검색
        </button>
      </header>
      <Suspense fallback={<h1>로딩중.....</h1>}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Suspense>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;

/* 연속적으로 발생하는 함수나 이벤트를 묶어서 처리하는 방식
 -> 최적화를 통한 성능 향상 목적

Debounce : 마지막에 한 번에 묶어서 처리해도 상관 없을 때
-> 검색 자동 완성
Throttle : 중간 중간 끊기지 않는 인터랙션이 필요할 때
-> 마우스 이동, 스크롤 이벤트
*/
