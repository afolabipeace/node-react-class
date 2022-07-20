import React from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import imgg from '../asset/imges/Playstore.png'
import img from '../asset/imges/Appstore.png'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './style.css'
const DisplayHere = () => {
  const url = "https://instagramm-091.herokuapp.com/login"
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [message, setmessage] = useState("")
  const [status, setstatus] = useState("")
  const navigate = useNavigate()
  const signCan = () => {
    const newUser = { email, password }
    axios.post(url, newUser).then((res) => {
      console.log(res)
      setmessage(res.data.message)
      setstatus(true)
    if (status === true) {
      navigate('/dash')
      alert(`hey`)
    }
  })
  }
  return (
    <>
      <center>
        <div className="container">
          <div className="col-lg-4 col-sm-10 col-md-10 shadow-sm m-5">
            <div className="card">
              <div className="card-title">
                <h2 id='font'>Instagram</h2>
                <h3>Sign in</h3>
              </div>
              <div className="card-body">
                {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger display-none'>{message}</div>}
                <form action="">
                  <input type="email" placeholder="Email" className='my-1 form-control' onChange={(e) => setemail(e.target.value)} value={email} />
                  <input type="password" placeholder="Password" className='my-1 form-control' onChange={(e) => setpassword(e.target.value)} value={password} />
                  <button onClick={() => signCan()} className="btn btn-info my-2 w-100">Login</button>
                </form>
              </div>
            </div>
            <div className="card">
              <p id="fonts">Don't have an account yet <Link to='/signup'>Signup</Link></p>
            </div>
            <div className='d-flex' >
              <img src={img} alt="" id='di' />
              <img src={imgg} alt="" id='d' />
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default DisplayHere