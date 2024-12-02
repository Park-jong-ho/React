import "../../../public/TMDB logo.webp"
import "../../style.css"

const Header = () => {
  return (
    <div className="header">
      <div className="nav_wraaper">
        <a className="logo" aria-label="홈">
          <img src="TMDB logo.webp" alt="이미지없음" width={154} height={20}></img>
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link">
                영화
              </a>
            </li>
            <li>
            <a href="#" className="nav-link">
                TV 프로그램
              </a>
            </li>
            <li>
            <a href="#" className="nav-link">
                인기
              </a>
            </li>
            <li>
            <a href="#" className="nav-link">
                커뮤니티
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header