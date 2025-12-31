import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Register from "./pages/Register";
import SignIn from "./pages/SingIn";
import AddTransaction from "./pages/AddTransaction";
import TransactionList from "./pages/TransactionList";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import ProtectedRoute from "./style/ProtectedRoute";



function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>

            <Route path="/register" element={<Register />} />
            <Route path="/singIn" element={<SignIn />} />

            <Route
              path="/addtransaction"
              element={
                <ProtectedRoute>
                  <AddTransaction />
                </ProtectedRoute>
              }
            />

            <Route
              path="/transactionlist"
              element={
                <ProtectedRoute>
                  <TransactionList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/report"
              element={
                <ProtectedRoute>
                  <Report />
                </ProtectedRoute>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>
      </div>

    </BrowserRouter>
  );
}
export default App;
