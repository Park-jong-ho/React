import React from "react"
import { useContext } from "react"
import { MyCounterContext } from "./CounterContext"

const DisplayCount = () => {
  // 글로벌하게 관리하고 있는 상태값 가져오기
  const count = useContext(MyCounterContext)

  return  (
    <>
      <div>
        <h1>Count 값 조회 : {count}</h1>
      </div>
    </>
  )
}

export default DisplayCount