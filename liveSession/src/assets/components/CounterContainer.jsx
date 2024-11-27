import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "../../reduxModules/CounterModule"
import Counter from "./Counter"


const CounterContainer = () => {
  // 1. 상태를 redux store 조회
  const { count } = useSelector((state) => ({
    count: state.counterReducer.count
  }))
  // 2. 이벤트 헨들러 구성

  const dispatch = useDispatch()
  // +1 함수
  const onIncrease = () => {
    dispatch(increase())
  }

  // -1 함수
  const onDecrease = () => {
    dispatch(decrease())
  }

  // 3. 렌더링
  return (
    <>
      <div>
        <Counter number={count} onIncrease={onIncrease} onDecrease={onDecrease} />
      </div>
    </>
  )
}

export default CounterContainer