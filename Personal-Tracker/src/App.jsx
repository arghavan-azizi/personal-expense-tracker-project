import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Register from "./pages/Register";
import SignIn from "./pages/SingIn";
import AddTransaction from "./pages/AddTransaction";
import TransactionList from "./pages/TransactionList";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/register" element={<Register />} />
           <Route path="/singIn" element={<SignIn/>} />
           <Route path="/addtransaction" element={<AddTransaction/>}/>
           <Route path="/transactionlist" element={<TransactionList/>}/>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/report" element={<Report/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
