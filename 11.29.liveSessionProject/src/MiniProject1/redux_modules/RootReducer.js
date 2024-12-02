
import { combineReducers } from 'redux';
import movieReducer from './MovieReducer';

//리듀서 묶기
const rootReducer = combineReducers({
  movieReducer,
})

export default rootReducer