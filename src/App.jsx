import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello world</h1>
      <h2> My ReactJS App host on EC2</h2>
      <p> Deploy by Md Shadab Azam Ansari</p>
    </div>
   
  )
}

export default App
