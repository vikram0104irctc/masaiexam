import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/login'
import { Navbar } from './components/navbar'
import { Signup } from './components/signup'
import { Home } from './components/home'
import { Private } from './private/private'

function App() {

  return (
    <>
    <Navbar/>

    <Routes>

    <Route path='/' element={<Private Component = {Home}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
