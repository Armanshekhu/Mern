import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'
import About from './pages/about/About'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App


// react router dom client side routing with out reload