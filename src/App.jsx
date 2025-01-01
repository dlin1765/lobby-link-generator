import { useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import LandingPage from './components/LandingPage'
import HeroPage from './components/HeroPage'
import Troubleshooting from './components/Troubleshooting'
import SteamRedirect from './components/SteamRedirect'

function App() {
  const [count, setCount] = useState(0)
  //steam://joinlobby/2708450/109775244951239975/76561198402013855
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroPage/>}/>
          <Route path='/setup' element={<LandingPage/>}/>
          <Route path='/troubleshooting' element={<Troubleshooting/>}/>
          <Route path ='/to/*' element = {<HeroPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
