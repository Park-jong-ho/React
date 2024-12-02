const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Footer 상단 영역 */}
        <div className="top">
          <div className="logo">
            <h1>TMDB 데모 사이트</h1>
          </div>
          <ul className="links">
            <li>
              <a href="#about">기본정보</a>
            </li>
            <li>
              <a href="#services">커뮤니티</a>
            </li>
            <li>
              <a href="#contact">연락처</a>
            </li>
            <li>
              <a href="#privacy">법적사항</a>
            </li>
          </ul>
        </div>
        {/* Footer 하단 영역 */}
        <div className="bottom">
          <p>&copy; 개인 학습용 웹사이트입니다. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
