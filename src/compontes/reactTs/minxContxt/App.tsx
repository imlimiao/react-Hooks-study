import React, { useReducer } from 'react'

import A from './A'
import B from './B'
import C from './C'

interface CountContextType {
  countState: number
  countDispatch: (action: string) => void
}

export const CountContext = React.createContext({} as CountContextType)

const initialState = 0
const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider
      value={{
        countState: count,
        countDispatch: dispatch,
      }}
    >
      <div className="App">
        Count - {count}
        <A />
        <B />
        <C />
      </div>
    </CountContext.Provider>
  )
}

export default App
