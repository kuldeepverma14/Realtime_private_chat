import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Register() {


    const registerHandler = () => {

    }
    return (
        <>
            <main className='bg-blue-50  h-screen flex flex-col justify-center items-center' >
                <div className=' block shadow-lg bg-white  p-10 rounded-lg'>
                    <h1 className='text-center'>kd chat</h1>
                    <h1 className='text-center text-2xl font-bold'>Register</h1>

                    <form className='mt-5'>
                        <div className='py-3 '>
                            {/* <label htmlFor="userName">User Name</label> */}
                            <input type="text" name='userName' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Username' />
                        </div>
                        <div className='py-3 '>
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" name='email' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Email' />
                        </div>
                        <div className='py-3 '>
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="text" name='password' className='w-96 rounded-sm border-b border-gray-500 px-2 py-1' placeholder='Password' />
                        </div>
                        <div className=" relative inline-block w-full cursor-pointer my-5">
                            <input type="file" id="file-input" className="absolute inset-0 opacity-0 cursor-pointer" />
                            <label htmlFor="file-input" className="flex  text-[#6482AD] justify-between items-center py-2  rounded cursor-pointer">
                                <RxAvatar className='h-10 w-10  absolute' /> <button className='absolute left-10'>Add your avatar</button>
                            </label>
                        </div>

                        <button className='mt-5 bg-bg text-white w-96 h-10 rounded' onClick={registerHandler} >Register</button>
                    </form>
                    <div className='text-center mt-5'>
                        Already have an account? <Link to="/login" className='underline text-[#6482AD] hover:text-[#8C3061]' >Login </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register