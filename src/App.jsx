import { useState } from 'react'
import './App.css'
import AlertApp from './project/AlertApp'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="">
        <AlertApp />
      </div>
  )
}

export default App
