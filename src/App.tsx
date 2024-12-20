import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {

      setCount(count + 1)
    
  }
  const handleDecrement = () => {
    if (count === 0){
      checkIsInteger()
    } else {
      setCount(count - 1)
    }
      
  }
  const checkIsInteger = () => {
  
      alert(`Count is now ${count} and cannot be negative`)
   
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>
         INCREMENT
        </button>
        <div>
          <span className={`${count === 10 ? 'is_ten': 'not_ten'}`}>{count}</span>
        </div>
        <button onClick={handleDecrement}>
         DECREMENT
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
