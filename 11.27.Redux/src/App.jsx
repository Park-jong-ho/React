import './App.css'
import { applyMiddleware, combineReducers, createStore } from "redux"
import { useSelector, useDispatch } from "react"
import { thunk } from "redux"
import { setTimeout } from 'timers/promises'

/* 
Action : 상태를 어떻게 변화시킬 것인지에 대한 내용이 담겨있는 객체
(type: "액션 이름")

Dispatch : 액션 객체를 Reducer로 넘겨주는 역할을 하는 함수
(Dispatch({ type: }))

Reducer : 리턴하는 값이 새로운 상태가 되는 함수
( state : 상태값, action : 액션 객체 )
Reducer가 여러개라면 combineReducers로 묶어준다

const counterReducer = ( state, action ) => {
  switch ( action.type ){
    case "INCREMENT"
      return state + action.payload
  }
}

Store : Redux의 전역 상태 저장소 createStore 함수에 Reducer를 전달해서 생성

Redux-Thunk : Redux에서 비동기 처리를 할 수 있게 해주는 미들웨어
*/


const increment1 = {
  type: "increment1"
}

const decrement1 = {
  type: "decrement1"
}

const increment2 = {
  type: "increment2"
}

const decrement2 = {
  type: "decrement2"
}

const counter1Reducer = (state = 4, action) => {
  switch (action.type) {
    case "increment1":
      return state + 1
    case "decrement1":
      return state - 1
    default:
      return state
  }
}

const counter2Reducer = (state = 1, action) => {
  switch (action.type) {
    case "increment2":
      return state + 1
    case "decrement2":
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter1Reducer, counter2Reducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  const counter1 = useSelector(state => state.counter1Reducer)
  const counter2 = useSelector(state => state.counter2Reducer)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <div>Counter : {counter1}</div>
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(increment1)
          }, 1000)
        })}>+</button>
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(decrement1)
          }, 1000)
        })}>-</button>
        <div>Counter : {counter2}</div>
        <button onClick={() => dispatch(increment2)}>+</button>
        <button onClick={() => dispatch(decrement2)}>-</button>
      </div>
    </>
  )
}

export default App
