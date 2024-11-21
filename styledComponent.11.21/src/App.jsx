import './App.css'
import styled from "styled-components"

// styled-components 사용하여 css 없이 스타일 지정
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center ;
`

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  `;
  // 불러와서 속성 추가하기
  const BigBlueButton = styled(BlueButton)`
    width: 300px;
    padding: 20px;
  `

  const BigTextBlueButton = styled(BigBlueButton)`
    font-size: 30px;
    font-weight: 900;
  `

function App() {

  return (
    <>
      <div>
        <Container>
          <div>hello</div>
          <BlueButton>파란색 버튼</BlueButton>
          <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
          <BigTextBlueButton>글자도 커다란 파란색 버튼</BigTextBlueButton>
        </Container>
      </div>
    </>
  )
}

export default App
