
const Search = () => {
  const handleClick = () => {
    alert("검색 알고리즘 작동중...");
  };

  return (
    <section className="search">
      <div className="title">
        <h2>환영합니다</h2>
        <h3>개인화된 영화 추천 시스템을 사용해보세요.</h3>
      </div>
      <div className="container">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="영화를 검색하세요..."
          />
          <button type="submit" className="search-button" onClick={handleClick}>
            검색
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
