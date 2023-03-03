import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

export default App
