import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Sec1 from './Components/Home/Sec1'
import New from './Components/NewTrend/New'
import Bottom from './Components/Bottom'
import Women from './Components/women/women'

function App() {

  return (
    <>
    <Nav />
      <Routes>
            <Route  path='/' element={<Sec1 />} />
            <Route  path='/new/trends' element={<New />} />
            <Route  path='/Women/new/trendy/fashion' element={<Women />} />
      </Routes>
      <Bottom />
    </>
  )
}

export default App
