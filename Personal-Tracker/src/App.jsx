import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Register from "./pages/Register";
import SignIn from "./pages/SingIn";


function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/register" element={<Register />} />
           <Route path="/singIn" element={<SignIn/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
