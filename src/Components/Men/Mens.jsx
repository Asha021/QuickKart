import React from 'react'
import Sport from './Sport'
import Indian from './Indian'
import Offers from './Offers'
import Bottom from './Bottom'

const Mens = () => {
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
             <button className="but1">Shop Now</button>
             </div>
      </div>
      </div>
      <Sport />
      <Indian />
      <Offers />
      <Bottom />
    </div>
  )
}

export default Mens
