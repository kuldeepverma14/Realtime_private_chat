/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../library/Firebase'
import { useEffect, useState } from 'react'
import { useUserStore } from '../library/userStore'
function Login() {
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState(" ")
    const [debouncedValue, setDebouncedValue] = useState(color);
    const navigate = useNavigate()
    const { fetchUserInfo, isLoading } = useUserStore()
    const registerHandler = async (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(e.target[0].value)
        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)
        const email1 = e.target[0].value
        console.log(email1)
        // const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(value => {
                    if (value?.user?.uid) {
                        fetchUserInfo(value?.user?.uid)
                        localStorage.setItem("chatToken", value?.user?.accessToken)
                        console.log("login res", value.user)
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
    if (isLoading) return <div className="bg-black opacity-30 w-full h-screen flex justify-center items-center text-white text-6xl">Loading...</div>


    console.log(debouncedValue)

    // const Deboundecing = (setColor, delay) => {
        useEffect(() => {
            const clear = setTimeout(() => {
                setDebouncedValue(color)
            }, 500)
            return () => {
                clearTimeout(clear)
            }
        }, [color])

    // }
    // Deboundecing(setColor, 2000)
    return (
        <>
            <main className='bg-blue-50  h-screen flex flex-col justify-center items-center' >
                <div className=' block shadow-lg bg-white  p-10 rounded-lg'>
                    <h1 className='text-center'>KD Realtime Chat</h1>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>

                    <form className='mt-5' onSubmit={registerHandler}>

                        <div className='py-3 '>
                            {/* <label htmlFor="email">Email</label> */}
                            <input required type="email" name='email' onChange={(e) => { setColor(e.target.value) }} className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Email' />
                        </div>
                        <div className='py-3 '>
                            {/* <label htmlFor="password">Password</label> */}
                            <input required type="password" name='password' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Password' />
                        </div>


                        <button className={'mt-5 text-white w-96 h-10 rounded ' + `bg-${debouncedValue ? "bg" : "white"}`} >{loading ? "Loading" : "Login"}</button>
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