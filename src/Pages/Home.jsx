import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Home() {

    return (
        <>
            <div className='flex overflow-auto h-screen p-5 ' >
                <div className="flex-auto w-[40%] 3xl:w-[30%]">
                    <Sidebar />
                </div>
                <div className="flex-auto w-[60%] bg-blue-500 rounded-r-xl 3xl:w-[70%]">
                    <Chat />
                </div>
            </div>

        </>
    )
}

export default Home