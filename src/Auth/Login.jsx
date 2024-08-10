/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../library/Firebase'
import { useState } from 'react'
import { useUserStore } from '../library/userStore'
function Login() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { fetchUserInfo } = useUserStore()
    const registerHandler = async (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(e.target[0].value)
        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)
        // const email = e.target[0].value
        // const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(value => {
                    if (value?.user?.uid) {
                        fetchUserInfo(value?.user?.uid)
                        localStorage.setItem("chatToken", value?.user?.accessToken)
                        console.log("login res",value.user)
                        navigate("/")
                    } else {
                        navigate("/login")
                    }
                })
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <main className='bg-blue-50  h-screen flex flex-col justify-center items-center' >
                <div className=' block shadow-lg bg-white  p-10 rounded-lg'>
                    <h1 className='text-center'>KD Realtime Chat</h1>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>

                    <form className='mt-5' onSubmit={registerHandler}>

                        <div className='py-3 '>
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" name='email' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Email' />
                        </div>
                        <div className='py-3 '>
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" name='password' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Password' />
                        </div>


                        <button className='mt-5 bg-bg text-white w-96 h-10 rounded' >{loading ? "Loading" : "Login"}</button>
                    </form>
                    <div className='text-center mt-5'>
                        Don't have an account?  <Link to="/register" className='underline text-[#6482AD] hover:text-[#3498db]' >Register </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login