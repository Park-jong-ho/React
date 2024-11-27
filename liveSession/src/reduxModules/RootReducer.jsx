import { combineReducers } from "redux";
import counterReducer from "./counter";
import todoReducer from "./todos";

//combineReducers로 각각 개별 리듀서 모듈을 하나의 리듀서로 구성한다
const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export default rootReducer;