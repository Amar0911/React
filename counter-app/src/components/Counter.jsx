import React, { useState } from "react";



function Counter (props) {

console.log(props.increment);


  return (
    <>
      <h1>Count is: {props.count}</h1>
      <button className='btn' type='button' onClick={props.increment}>Increase</button>

      <button className='btn' type='button' onClick={props.decrement}>Decrease</button>
      <button className='btn' type='button' onClick={props.reset}>Reset</button>
    </>
  )
}
export default Counter;