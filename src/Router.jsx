import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import ProtectedRoute from "./Auth/ProtectedRoute"

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <ProtectedRoute>
            <Route path="/" element={<Home />} />
          </ProtectedRoute>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
