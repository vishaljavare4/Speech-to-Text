import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex flex-col p-4 '>
        <Home/>
      </div>
    
    </>
  )
}

export default App