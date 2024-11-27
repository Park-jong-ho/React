// 리덕스 모듈 구성


// 1. 액션 타입
const INCREASE = "COUNTER/INCREASE"
const DECREASE = "COUNTER/DECREASE"

// 2. 액션 함수
export const increase = () => {{ type: INCREASE }}
export const decrease = () => {{ type: DECREASE }}

// 3. 초기값 선언
const initState = {
  count: 10,
}

// 4. 리듀서 함수
export default function counterReducer(state = initState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      }
      case DECREASE:
        return {
          count: state.count -1,
        }
      default:
        return state;
  }
}

