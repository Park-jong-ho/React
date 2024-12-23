function SearchBar({ city, setCity, fetchData }) {
  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="도시 이름 입력"
      />
      <button onClick={fetchData}>검색</button>
    </div>
  );
}

export default SearchBar;
