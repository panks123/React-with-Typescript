import React, { useReducer } from 'react'

type CountStateType = {
    count: number; 
}
/***************************** Descreminated unions in typescript */
// We are using this concept here to make the type checking more strict
type UpdateAction = {
    type: 'increment'| 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CountActionType = UpdateAction | ResetAction

/********************************************************************* */

const initialState: CountStateType = {
    count: 0
}

const reducer = (state: CountStateType, action: CountActionType)=>{
    switch(action.type)
    {
        case 'increment':
            return { count: state.count + action.payload } 
        
        case 'decrement':
            return { count : state.count - action.payload }

        // Suppose we have one action which does not require payload
        case 'reset':
            return initialState 
        default:
            return state
    }
}


const Counter = () => {
    // because of type inference - state becomes of type: CountStateType and dispatch becomes of type: React.Dispatch<CountActionType> 
    const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={()=> dispatch({ type: 'increment', payload: 10 })}>Increment</button>
      <button onClick={()=> dispatch({ type: 'decrement', payload: 10 })}>Decrement</button>
      <button onClick={()=> dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default Counter
