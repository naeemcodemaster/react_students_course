import React,{useReducer} from 'react'

const initialState = {
    counter:0
}
function UseReducer() {

  const [state,dispatch] = useReducer(reducer,initialState);
  

  return (
    <>

    <p>value is {state.counter}</p>

    <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>

    <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    

    </>
  )
}

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return {counter:state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        default:
            return state;
    }
}

export default UseReducer


