import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import imgg from '../asset/imges/Playstore.png'
import img from '../asset/imges/Appstore.png'
// import netflx from '../asset/imges/Netflix-Logo.wine.png'
import{Link} from 'react-router-dom'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './style.css'
function Signup() {
    const url = "https://instagramm-091.herokuapp.com/signup"
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const [status, setstatus] = useState("")
    const navigate = useNavigate()
    const registerCan = () => {
        const newUser = { firstname, lastname, email, password }
        axios.post(url, newUser).then((res) => {
            console.log(res)
            setmessage(res.data.message)
            setstatus(true)
            if (status === true) {
                navigate('/display')
                alert(`hey`)
            }
        })
    }
    return (
        <>
            {/* <div className="container">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <h1 className="text-center">Signup</h1>
                        {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger'>{message}</div>}
                        <input type="text" placeholder='FirstName' className='form-control my-2' onChange={(e) => setfirstname(e.target.value)} />
                        <input type="text" placeholder='lastName' className='form-control my-2' onChange={(e) => setlastname(e.target.value)} />
                        <input type="text" placeholder='Email' className='form-control my-2' onChange={(e) => setemail(e.target.value)} />
                        <input type="text" placeholder='FirstName' className='form-control my-2' onChange={(e) => setpassword(e.target.value)} />
                        <button onClick={() => signup()} className='btn btn-info'>Signup</button>
                    </div>
                </div>
            </div> */}

            <center>
                <div className='bg-success col-lg-3 col-sm-10 col-md-10 shadow-sm m-5'>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-center' id='font'>Instagram</h1>
                            </div>
                            {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger display-none'>{message}</div>}
                            <form action="">
                                <p id='fonts'>Sign up to see photos and videos from your friends.</p>
                                <div className='bg-primary text-light col-lg-8 my-3 mx-2'>Login with facebook</div>
                                <hr placeholder='OR'/>
                                <input type="email" placeholder='Mobile Number or Email' className='my-1 form-control' onChange={(e) => setfirstname(e.target.value)} value={firstname} />
                                <input type="text" placeholder='full Name' className='my-2 form-control' onChange={(e) => setlastname(e.target.value)} value={lastname} />
                                <input type="text" placeholder='Username' className='my-2 form-control' onChange={(e) => setemail(e.target.value)} value={email} />
                                <input type="password" placeholder='Password' className='my-2 form-control' onChange={(e) => setpassword(e.target.value)} value={password}/>
                                <p id='foo'>People who use our service may have uploaded your contact information to Instagram. <a href="Here.js">Learn More</a></p>
                                <p id='foo'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                                <button onClick={() => registerCan(firstname, lastname, email, password)} className='btn btn-info my-2 w-100'>SignUp</button>
                            </form>
                        </div>
                        <div className="card">
                        <p id="fonts">Already have an account<Link to='/display'>Signin</Link></p>
                        </div><br />
                        <div className='d-flex' >
                        <img src={img} alt="" id='div'/>
                        <img src={imgg} alt="" id='divv'/>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Signup