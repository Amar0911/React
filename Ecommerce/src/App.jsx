import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (running){
      interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000);
    }
    
    // cleanup
    return () => {
      clearInterval(interval)
    }

  }, [running]);

  const handleStart = () => {setRunning(true)};
  const handleStop = () => {setRunning(false)};
  const handleReset = () => {setCount(0)};
  

  return (
    <div className="app">
      <h1>React Counter App</h1>
      <div className="counter-display">
        <h2>Counter: {count}</h2>
      </div>
      <div className="controls">
        <button onClick={handleStart} disabled={running}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App
