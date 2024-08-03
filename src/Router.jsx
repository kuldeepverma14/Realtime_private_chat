import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"
import Home from "./Pages/Home"
import ProtectedRoute from "./Auth/ProtectedRoute"
import Register from "./Auth/Register"
import Login from "./Auth/Login"

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute><Home /> </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
