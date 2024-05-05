import React,{useReducer} from 'react'

const initialState = {
    counter:0
}
function UseReducer() {

  const [state,dispatch] = useReducer(reducer,initialState);
  
  return (
    <>

    <p>value is {state.counter}</p>

    <button onClick={()=>dispatch({type:'INCREMENT',payload:5})}>Increment</button>

    <button onClick={()=>dispatch({type:'DECREMENT',payload:5})}>Decrement</button>
    
    </>
  )
}

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return {counter:state.counter + action.payload}
        case 'DECREMENT':
            return {counter: state.counter - action.payload}
        default:
            return state;
    }
}

export default UseReducer


