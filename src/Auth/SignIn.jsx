/* eslint-disable react/no-unescaped-entities */
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate, } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '.././library/Firebase'


function SignIn() {
    
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const submitUser = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, user.email, user.password)
            .then(value => {
                console.log(value)
                if (value?.user?.uid) {
                    localStorage.setItem("chatToken", value?.user?.accessToken)
                    navigate("/")
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <div className="flex flex-col px-3 bg-blue-50 justify-center items-center h-screen">
                <div className=''>
                    {/* <img className='' width={350} src={logo1} alt="logo not found" /> */}
                </div>
                <div className="shadow-lg rounded-lg bg-white mt-5 p-10">
                    <h1 className="text-2xl  text-center font-bold">Sign In</h1>
                    <form>
                        <div className="mt-5">
                            <label htmlFor="email">Email:</label>
                            <div>
                                <input className="border border-blue-300 sm:w-96 bg-white p-2  rounded" type="email" name="email" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="password">Password:</label>
                            <div>
                                <input className="sm:w-96 p-2 border rounded bg-white border-blue-300" type="password" name="password" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-5 '>
                            <button onClick={submitUser} className="px-4 w-full sm:w-96 py-2 mt-2 text-white bg-[#38C0E6] rounded ">
                                Sign In
                            </button>
                        </div>
                        {/* <button onClick={GoogleSignUp} className="border-blue-300 flex justify-center border w-full sm:w-96  rounded mt-5" ><img className="w-10 h-10" src={g} alt="sds" /> <p className="pt-2  ">Sign In with google </p></button> */}
                    </form>
                    <div className="flex justify-center mt-4">
                        <p>Don't have an account? &nbsp; </p> <Link to="/signup" className="underline text-[#38C0E6]">Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn