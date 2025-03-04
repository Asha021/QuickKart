import React from 'react'
import Offers from './Offers'
import Deal from './Deal'
import TopOffer from './TopOffer'
import Off from './Off'

const New = () => {
  return (
    <div>
     <div>
     </div>
     <div className="h-screen">
      <div  className="h-full"  style={{
                 backgroundImage: "url(/a3-1.jpg)",
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
      <Offers />
      <Deal />
      <Off />
      <TopOffer />
    </div>
  )
}

export default New
