import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment (state, action) { return state + 1 },
    decrement (state, action) { return state - 1 },
  }
})

const slowIncreamentThunk = createAsyncThunk(
  'counter/slowIncrement',
  (value, {dispatch}) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment())
    }, 1000)
  }
)

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={() => {dispatch( slowIncreamentThunk() )}}>+</button>
      <button onClick={() => {dispatch(counterSlice.actions.decrement())}}>-</button>
    </>
  );
}

export default App;

/*
  createSlice() : 액션 타입, 액션 생성자, 리듀서를 한 번에 만들어 줌

  createSlice({name: 'counter', initialState: 0, reducers: {
      increment(state, action) {state += 1},
      decrement(state, action) {state -= 1}
    }
  })

  configureStore() : 리듀서를 전달받아 전역 상태 저장소를 생성

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      any: anySlice.reducer,
    }
  })

                액션 생성자 사용법
  createSlice에서 정의해준 reducers 이름으로 사용

  createSlice({name: 'counter', initialState: 0, reducers: {
      increment(state, action) {state += 1},
      decrement(state, action) {state -= 1}
    }
  })
    dispatch( counterSlice.actions.increment() )
    dispatch( counterSlice.actions.decrement() )

    createAsyncThunk() : RTK에서 제공하는 Thunk 생성 함수
    redux-thunk처럼 비동기 처리가 가능하다.
*/