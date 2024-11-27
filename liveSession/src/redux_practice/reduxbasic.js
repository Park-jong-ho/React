// 리덕스 배우기

import { createStore } from "redux";

// 1. 액션 타입 정의
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// 2. 액션 생성 함수
const increase = () => ({
  type: INCREMENT,
})

const decrease = () => ({
  type: DECREMENT,
})

// 3. 초기값 선언
const initState = {
  count: 0,
}

// 4. 리듀서
function reducer(state = initState,action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count -1,
      }
    default:
      return state;
  }
}

// 5. 스토어 만들기
const store = createStore(reducer)
// console.log("store : ", store);

// 6.구독
store.subscribe(() => {
  const state = store.getState()
  console.log("스토어의 상태값이 변하면 호출됩니다 : ", state);
})

// 7. 액션 디스패치
store.dispatch(increase())
store.dispatch(increase())
store.dispatch(decrease())