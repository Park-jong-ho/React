import './App.css'
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [rerender, setRerender] = useState(false)

  const plus1 = useCallback((number) => { return number + 1}, [])

  const numberPlus1 = useMemo(() => {
    return plus1(number)
  }, [rerender])

  useEffect(() => {
    console.log("plus1 생성됨");
  }, [plus1])

  return (
    <>
      <div>
        <NumberDisplay number={number} />
        <div>numberPlus1 : {numberPlus1}</div>
        <button onClick={() => {setNumber(number + 1)}}>number + 1</button>
        <button onClick={() => {setRerender(!rerender)}}>Rerender</button>
      </div>
    </>
  )
}

const NumberDisplay = memo(({ number }) => {
  console.log("Display 렌더링");
  return <div>number: {number}</div>;
});

export default App


/*
useMemo() : 함수를 호출 결과를 저장
useCallback() : 함수를 저장
memo() : 컴포넌트를 저장
*/