import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Home() {
  
    return (
        <>
            <div className='flex h-screen p-5 shadow-lg' >
                <div className="flex-auto w-28">
                <Sidebar />
                </div>
                <div className="flex-auto w-96">
                <Chat />
                </div>
            </div>
        </>
    )
}

export default Home