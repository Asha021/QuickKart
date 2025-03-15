import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Sec1 from './Components/Home/Sec1'
import New from './Components/NewTrend/New'
import Bottom from './Components/Bottom'
import Women from './Components/women/women'
import Mens from './Components/Men/Mens'
import Kids from './Components/KidsColl/kids'
import Personal from './Components/PersonlCare/Personal'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './Components/Cloths/IndianWear/Home'

function App() {
  useEffect(()=>{
      Aos.init()
  },[])

  return (
    <>
    <Nav />
      <Routes>
            <Route  path='/' element={<Sec1 />} />
            <Route  path='/new/trends' element={<New />} />
            <Route  path='/Women/new/trendy/fashion' element={<Women />} />
            <Route  path='/mens/section' element={<Mens />} />
            <Route  path='/kids/wear/collection' element={<Kids />} />
            <Route  path='/personal/care/products' element={<Personal />} />
            <Route  path='/traditional/wear/cloths' element={<Home />} />
      </Routes>
      <Bottom />
    </>
  )
}

export default App
