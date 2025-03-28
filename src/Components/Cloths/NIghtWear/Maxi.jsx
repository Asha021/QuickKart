import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Maxi = () => {
  const [data,setData]=useState([]);
  const API =  "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";

  useEffect(()=>{
    const getData=async()=>{
        try {
          const resp = await axios.get(API);
          console.warn(resp.data.photos)
          setData(resp.data.photos) 
        } catch (error) {
           console.error("Error fectching data",error)
        }
    }
    getData()
  },[])

  return (
    <div>
      {data.map((item)=>(
        <div>
          <img src={item.url} alt="img" />
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Maxi
