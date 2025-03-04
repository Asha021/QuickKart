import React from 'react'
import TopWear from './TopWear'
import Jwellary from './Jwellary'
import BootomWear from './BootomWear'
import Offer from './Offer'


const women = () => {
  return (
    <div>
       <div>
     </div>
     <div className="h-screen">
      <div  className="h-full"  style={{
                 backgroundImage: "url(/a2-1.jpg)",
                 backgroundSize: "cover",
               }}
             >
             <div  className="py-70 ml-20 font  text-5xl text-white">
             <h1>Take advantage of great deals</h1>
             <h2 className=""> on smartphones! & <br />another Offers</h2>
             <button className="p-2  bg-red-900 mt-10 hover:bg-red-950 border">Shop Now</button>
             </div>
      </div>
      </div>
      <TopWear />
      <Jwellary />
      <Offer />
      <BootomWear />
    </div>
  )
}

export default women
