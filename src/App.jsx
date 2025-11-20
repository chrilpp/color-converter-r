import { useState } from 'react'
import dot from '/dot3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Use state for items and input value
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setItems(prev => [...prev, trimmed])
    setInputValue('')
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50'></header>
      <nav className='h-16 flex items-center justify-center mb-4'>
        {' '}
        {/* fixed nav height */}
        <a href='index' className='mx-4'>
          Index
        </a>
        <a href='about' className='mx-4'>
          About
        </a>
        <a href='media' className='mx-4'>
          Media
        </a>
      </nav>

      {/* parent = 50% of viewport height minus nav (nav = h-16 = 4rem) */}
      <div className='center-container bg-red-500/30 h-[calc(80vh-4rem)] w-[calc(80vh-4rem)]'>
        {/* child = 50% of parent */}
        <div className='flex w-full h-1/2 bg-green-500/30'>
          <a href='https://google.com' target='_blank' rel='noreferrer' className='flex-1 h-full flex items-center justify-center'>
            <img src={dot} alt='dot' className='h-2/4' />
          </a>

          <a href='https://google.com' target='_blank' rel='noreferrer' className='flex-1 h-full flex items-center justify-center'>
            <img src={dot} alt='dot2' className='h-2/4' />
          </a>
        </div>
        <div className='flex w-fill h-1/2 bg-blue-500/30 items-center justify-center'>
          <h1>Some text</h1>
        </div>
      </div>
    </>
  )
}

export default App
