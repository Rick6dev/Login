import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRoutes } from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyRoutes></MyRoutes>
      <h1>Holis</h1>
    </>
  )
}

export default App
