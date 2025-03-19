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
import Home from './Components/Cloths/DayWear/IndianWear/Home'
import Western from './Components/Cloths/DayWear/Western/Western'
import Dress from './Components/Cloths/DayWear/dresses/Dress'
import Saree from './Components/Cloths/DayWear/saree/Saree'
import Kurti from './Components/Cloths/DayWear/kurti/Kurti'
import Dress1Info from './Components/Cloths/DayWear/IndianWear/Dress1Info'
import Cart from './Components/Cloths/DayWear/IndianWear/Cart'
import ReletedPro from './Components/Cloths/DayWear/IndianWear/ReletedPro'
import Shorts from './Components/Cloths/NIghtWear/Shorts'
// import Dress from './Components/Cloths/DayWear/dresses/Dress'

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
            <Route  path='/western/wear/cloths' element={<Western />} />
            <Route  path='/trendy/dresses' element={<Dress />} />
            <Route  path='/shop/saree' element={<Saree />} />
            <Route  path='/trendy/kurti/kurta-sets' element={<Kurti />} />
            <Route  path='/shop/now' element={<Dress1Info />} />
            <Route  path='/cart/items' element={<Cart />} />
            <Route  path='/more/releted/products' element={<ReletedPro />} />
            <Route  path='/nightware/shorts' element={<Shorts />} />
            {/* <Route  path='/dresses/buy/now' element={<Dress />} /> */}
      </Routes>
      <Bottom />
    </>
  )
}

export default App
