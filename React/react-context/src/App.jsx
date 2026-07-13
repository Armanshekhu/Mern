import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login'
import Dashboard from './components/dashboard'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      <h1>Context Class</h1>
      <Login email={email} setEmail={setEmail}/>
      <br/><br/>
      <Dashboard email={email}/>
    </>
  )
}

export default App
