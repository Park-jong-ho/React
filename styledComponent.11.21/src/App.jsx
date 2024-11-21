import './App.css'
import styled from "styled-components"
import { useState } from "react"
import { createGlobalStyle } from "styled-components"

// styled-components 사용하여 css 없이 스타일 지정
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center ;
  // props 값 전달
  background-color: rgb(
      ${(props) => props.input1},
      ${(props) => props.input2},
      ${(props) => props.input3},
      ${(props) => props.input4});
`;


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
  `;

  const BigTextBlueButton = styled(BigBlueButton)`
    font-size: 30px;
    font-weight: 900;
  `;
  
  //props로 값 전달하기
  const PropsButton = styled.button`
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: ${(props) => props.textColor || "black"};
    padding: ${(props) => props.padding || 0};
    border-radius: ${(props) => props.radius || 0};
    margin: ${(props) => props.margin || 0};
    width: ${(props) => props.width || "auto"};
    font-size: ${(props) => props.fontSize || "auto"};
    font-weight: ${(props) => props.fontWeight || 400};
  `;

  const BackgroundColorDiv = styled.div`
    width: 300px;
    height: 100px;
`
//전체 영역 스타일 지정
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  input {
    width: 90%;
  }
  span {
    color: green;
    &:hover {
      background-color: white;
    }
  }
`;

function App() {
  // range 변수 할당
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [input4, setInput4] = useState(0)

  return (
    <>
      <div> 
        <>
        <GlobalStyle />
        {/* range값 -> props로 -> container 할당 */}
        <Container input1={input1} input2={input2} input3={input3} input4={input4} >
          <div>hello</div>
          <BlueButton>파란색 버튼</BlueButton>
          <PropsButton
          backgroundColor={'blue'}
          textColor="white"
          padding="10px"
          radius="4px"
          margin="10px"
          >파란색 버튼</PropsButton>
          <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
          <PropsButton
          backgroundColor={'blue'}
          textColor="white"
          padding="20px"
          radius="4px"
          margin="10px"
          width="300px"
          >파란색 버튼</PropsButton>
          <BigTextBlueButton>글자도 커다란 파란색 버튼</BigTextBlueButton>
          <PropsButton
          backgroundColor={'blue'}
          textColor="white"
          padding="20px"
          radius="4px"
          margin="10px"
          width="300px"
          fontSize="30px"
          fontWeight={900}
          >파란색 버튼</PropsButton>
          <PropsButton backgroundColor="green" textColor="orange">Props 버튼</PropsButton>
          <PropsButton backgroundColor="yellow" textColor="red">Props 버튼</PropsButton>
          <span>{input1}</span>
          <input 
          type='range' 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)}
          min={0} 
          max={225}
          />
          <span>{input2}</span>
          <input 
          type='range' 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)}
          min={0} 
          max={225}
          />
          <span>{input3}</span>
          <input 
          type='range' 
          value={input3} 
          onChange={(e) => setInput3(e.target.value)}
          min={0} 
          max={225}
          />
          <span>{input4}</span>
          <input 
          type='range' 
          value={input4} 
          onChange={(e) => setInput4(e.target.value)}
          min={0} 
          step={0.01} 
          max={1}
          />
          <BackgroundColorDiv />
        </Container>
        </>
      </div>
    </>
  )
}

export default App
