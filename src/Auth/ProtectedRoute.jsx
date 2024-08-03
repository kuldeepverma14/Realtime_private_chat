/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const token = localStorage.getItem("chatToken")

    useEffect(() => {
        if (!token) {
            navigate("/signin")
        }
    }, [navigate, token])

    return token ? children : null
}

export default ProtectedRoute
