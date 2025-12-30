import { BrowserRouter, Route, Routes } from "react-router"
import Register from "./pages/Register"
import SignIn from "./pages/SingIn"

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/register" element={<Register />}/>
    <Route path="/singIn" element={<SignIn />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
