import './App.css'
import { useCounter } from './context/counterContext'

function App() {
  const [ counter, setCounter] = useCounter()
  return (
    <>
      <div>
        <div> counter : {counter}</div>
        <button onClick={() => {setCounter(prev => prev + 1)}}>+</button>
        <button onClick={() => {setCounter(prev => prev - 1)}}>-</button>
      </div>
    </>
  )
}

export default App
