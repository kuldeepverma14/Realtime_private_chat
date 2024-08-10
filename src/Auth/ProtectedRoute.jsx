/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../library/userStore"

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { currentUser } = useUserStore()
    console.log("current",currentUser)
    useEffect(() => {
        if (!currentUser) {
            navigate("/login")
        }
    }, [navigate, currentUser])

    return currentUser ? children : null
}

export default ProtectedRoute
