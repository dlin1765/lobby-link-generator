import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import LandingPage from './components/LandingPage'
import HeroPage from './components/HeroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HeroPage/>}/>
          <Route path='/setup' element={<LandingPage/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
