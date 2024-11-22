import { useState } from "react"

// 자식 컴포넌트
const CounterButton2 = ({ onClick, count }) => {
  console.log("CounterButton2 렌더링...");
  return <button onClick={onClick}>Clicked {count} times</button>;
  };

const CounterButton = React.memo(({ onClick, count }) => {
  console.log("CounterButton 렌더링...");
  return <button onClick={onClick}>Clicked {count} times</button>;
  });


// 부모 컴포넌트
const CounterUserCallback = () => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(0)

  const onIncrease = useCallback(() => {
    console.log("onIncrease 함수 호출");
    // 함수형 업데이트
    setCount((prev) => prev + 1);
  }, []);

  const handleState = () => {
    console.log("handleState 함수 호출");
    setState((prev) => prev - 1);
  }

  // 렌더링 조건
  // 1. 부모의 컴포넌트가 리렌더링되면 자식의 컴포넌트도 리렌더링된다
  // 2. 
  //
  //
  return (
    <>
      <div>
        <h1>count 값 : {count}</h1>
        <CounterButton onClick={onIncrease} count={count} />
        <button onClick={handleState}>
          count와 전혀 관계 없는 상태값 : {state}</button>
      </div>
    </>
  )
}

export default CounterUserCallback