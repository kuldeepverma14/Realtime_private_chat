import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { auth, database, storage } from '.././library/Firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import avatar1 from ".././assets/avatar.png"
import { doc, setDoc } from 'firebase/firestore'
import Upload from '../library/Upload'
function Register() {

    const [error, setError] = useState(false)
    const [avatar, setAvatar] = useState()

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                // The createObjectURL() static method of the URL interface creates a string containing a URL representing the object given in the parameter.
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { userName, email, password } = Object.fromEntries(formData)
        // const displayName = e.target[0].value
        // const email = e.target[1].value
        // const password = e.target[2].value
        // const file = e.target[3].files[0]
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const imgUrl= await Upload(avatar.file)
            await setDoc(doc(database, "user", response.user.uid),{
                userName,
                email,
                avatar:imgUrl,
                id:response.user.uid,
                blocked:[]
            })
            await setDoc(doc(database, "userChats", response.user.uid),{
                chats:[]
            })
            if(response.user.uid)console.log("success",)
          
                // const storageRef = ref(storage, displayName) // data.name= name of image which it will be saved
                // const uploadTask = uploadBytesResumable(storageRef, file)
                // // register three observer
                // uploadTask.on(
                //     error => {
                //         console.log(error)
                //         setError(true)
                //     },
                //     getDownloadURL(uploadTask.snapshot.ref)
                //         .then(async downloadURL => {
                //             console.log("downloadURL", downloadURL)
                //             await updateProfile(
                //                 response.user, { displayName, photoURL: downloadURL }
                //             )
                //         })
                // )
                // .then(val => console.log(val))
                // .catch(err => console.log(err))
        } catch (err) {
            setError(true)
        }
    }
    return (
        <> {error && <div className='text-red-500 flex justify-center' >Something went wrong</div>}
            <main className='bg-blue-50  h-screen flex flex-col justify-center items-center' >
                <div className=' block shadow-lg bg-white  p-10 rounded-lg'>
                    <h1 className='text-center'>kd chat</h1>
                    <h1 className='text-center text-2xl font-bold'>Register</h1>

                    <form className='mt-5' onSubmit={registerHandler}>
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
                        {/* <div className=" relative inline-block w-full cursor-pointer my-5">
                            <input type="file" id="file-input" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleAvatar} />
                            <label htmlFor="file-input" className="flex  text-[#6482AD] justify-between items-center py-2  rounded cursor-pointer">
                                <img src={avatar?.url??avatar1} className='h-20 w-20 absolute mt-5' alt="not found" />
                                <button className='absolute left-20'>Add your avatar</button>
                            </label>
                        </div> */}
                        <div className="relative inline-block w-full cursor-pointer my-5">
                            <label htmlFor="file-input" className="flex items-center py-2 rounded cursor-pointer relative w-full h-24">
                                <input
                                    type="file"
                                    id="file-input"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleAvatar}
                                />
                                <img src={avatar?.url ?? avatar1} className="h-20 rounded-lg w-20 absolute left-5" alt="not found" />
                                <span className="absolute left-28 text-[#6482AD] underline">Add your avatar</span>
                            </label>
                        </div>
                        <div>
                        </div>

                        <button className='mt-5 bg-bg text-white w-96 h-10 rounded'  >Register</button>
                    </form>
                    <div className='text-center mt-5'>
                        Already have an account? <Link to="/login" className='underline text-[#6482AD] hover=text-[#8C3061]' >Login </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register