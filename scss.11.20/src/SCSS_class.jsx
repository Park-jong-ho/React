import './SCSS_class.scss';

function SCSS() {
  return (
    <div className='header'>
      <div className='test'>Hello</div>
      <h2>SCSS 변수 연습</h2>
      <ul>
        <li>안녕하세요
          <p>p 요소입니다.</p>
        </li>
        <li>반갑습니다
          <div>div 요소입니다.</div>
        </li>
        <li>SCSS를<br />
          <span>span 요소입니다.
            <br />
            <h3>h3 요소입니다.</h3>
          </span>
        </li>
        <li>공부해봅시다
          <h2>h2 요소입니다.</h2>
        </li>
      </ul>
      <section>
        <article>SCSS문법에는</article>
        <article>변수 사용과</article>
        <article>중첩 문법과</article>
        <article>믹스인 등이 있습니다.</article>
      </section>
    </div>
  );
}

export default SCSS;
