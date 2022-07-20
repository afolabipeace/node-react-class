import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {
    const url = "https://instagramm-091.herokuapp.com"
    useEffect(()=>{
        axios.get(url).then((res)=>{
            console.log(res)
        }
        )},[])
  return (
    <div>am here</div>
  )
}

export default LandingPage