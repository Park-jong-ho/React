import React from "react"
import { useReducer } from "react"

// reducer gkatn
const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//reducer 적용한 코드
const ReducerCounter = () => {

  const [number, dispath] = useReducer(reducer, 10)

  const onIncrease = () => {
    dispath({ type: "INCREMENT"});
  };

  const onDecrease = () => {
    dispath({ type: "DECREMENT"});
  };

  return (
    <>
      <div>
        <h1>number 상태 값: {number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  )
}

export default ReducerCounter

//reducer 적용하지 않은 코드
const ReducerCounter2 = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};
