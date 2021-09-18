import React, { useReducer } from "react";


function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

export default function UseReducerDemo(props) {
   const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button onClick={()=>dispatch({type:"increment"})} >+</button>
      {state.count}
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </>
  );
}
