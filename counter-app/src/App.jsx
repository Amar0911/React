import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    {if (count>0)
    setCount(count - 1)
  }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Count is:{count}</h1>
      <button className='btn' type='button' onClick={increment}>Increase</button>
      <button className='btn' type='button' onClick={decrement}>Decrease</button>
      <button className='btn' type='button' onClick={reset}>Reset</button>
    </>
  )
}

export default App
