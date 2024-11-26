import { createContext, useState, useContext } from "react";

const counterContext = createContext()

export function CounterProvider({children}) {
  const [ counter, setCounter] = useState(5)
  return (
    <>
      <div>
        <counterContext.Provider value={ [counter, setCounter]}>
          {children}
        </counterContext.Provider>
      </div>
    </>
  )
}
export function useCounter() {
  return useContext(counterContext)
}
