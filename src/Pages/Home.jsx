import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    // const SignOutUser = () => {
    //     localStorage.removeItem('chatToken');
    //     localStorage.removeItem('chatUID');
    //     navigate('/signin');
    // }

    return (
        <>
            {/* <div onClick={SignOutUser}>Sign out</div> */}
            <div className='text-red-500' >Home</div>
        </>
    )
}

export default Home