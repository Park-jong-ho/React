import React from "react"
import { createContext } from "vm";
import DisplayCount from "./DisplayCount";

// reducer 함수
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

// 1. createContext를 사용하여 context 객체를 생성
export const MyCounterContext = createContext();

const CounterContext = () => {
  // 2. 상태를 생성하고 초기화
  const [count, dispath] = useReducer(reducer, 5)

  // 3. provider를 사용하여 Context를 전역적으로 사용할 수 있게 해주
  return (
    <>
      <div>
        <MyCounterContext.provider value={count}>
          {/* count를 글로벌하게 사용할 수 있게 컴포넌트 선언 */}
          <DisplayCount />

        </MyCounterContext.provider>
      </div>
    </>
  )
}

export default CounterContext