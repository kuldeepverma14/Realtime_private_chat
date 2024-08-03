import { useNavigate } from "react-router-dom"

const token = localStorage.getItem("chatToken")
function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    console.log(token)
    if (!token) {
        navigate("/login")
    }


    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute