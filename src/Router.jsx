import { BrowserRouter , Routes, Route } from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
