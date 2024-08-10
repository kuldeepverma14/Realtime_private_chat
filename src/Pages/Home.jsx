import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../library/Firebase";
import { useUserStore } from "../library/userStore";
import Login from "../Auth/Login";

function Home() {

    const { currentUser, isLoading, fetchUserInfo } = useUserStore()
console.log("curretnuser",currentUser)

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, user => {
            console.log(user)
            fetchUserInfo(user.uid)
        })
        return () => {
            unSub()
        }
    }, [fetchUserInfo])

    if (isLoading) return <div className="bg-black opacity-30 w-screen h-screen flex justify-center items-end text-white">Loading...</div>
    return (
        <>
            {currentUser ? <div className='flex overflow-auto h-screen p-5 ' >
                <div className="flex-auto w-[40%] 3xl:w-[30%]">
                    <Sidebar />
                </div>
                <div className="flex-auto w-[60%] bg-blue-500 rounded-r-xl 3xl:w-[70%]">
                    <Chat />
                </div>
            </div> : <Login />}

        </>
    )
}

export default Home