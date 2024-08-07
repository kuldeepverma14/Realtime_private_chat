/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { auth } from '.././library/Firebase'

function Login() {


    const registerHandler = () => {

    }
    return (
        <>
            <main className='bg-blue-50  h-screen flex flex-col justify-center items-center' >
                <div className=' block shadow-lg bg-white  p-10 rounded-lg'>
                    <h1 className='text-center'>KD Realtime Chat</h1>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>

                    <form className='mt-5'>

                        <div className='py-3 '>
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" name='email' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Email' />
                        </div>
                        <div className='py-3 '>
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="text" name='password' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Password' />
                        </div>


                        <button className='mt-5 bg-bg text-white w-96 h-10 rounded' onClick={registerHandler} >Login</button>
                    </form>
                    <div className='text-center mt-5'>
                        Don't have an account?  <Link to="/register" className='underline text-[#6482AD] hover:text-[#8C3061]' >Register </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login