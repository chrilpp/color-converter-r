import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Use state for items and input value
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setItems((prev) => [...prev, trimmed])
    setInputValue('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter 2k</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        The best site ever existed! (for learning lals)
      </p>
      <div style={{ margin: '2rem 0' }}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button onClick={addItem}>Add item</button>
      </div>
      <ul id="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
