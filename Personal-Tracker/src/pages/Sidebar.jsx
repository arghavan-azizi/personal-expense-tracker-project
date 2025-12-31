import { Link, useLocation } from "react-router-dom";
import "../style/reset.css";
import "../style/Sidebar.css";
import { useEffect, useState } from "react";
import { current_user_key, logOut } from "./storage";

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentUser = localStorage.getItem(current_user_key);
    setIsLoggedIn(!!currentUser);
  }, [location.pathname]);

  const handleLogOut = () => {
    logOut();
    setIsLoggedIn(false);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <svg className="user-icon" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
        </svg>
      </div>

      <nav className="sidebar-menue">
        <Link to="/" className="menue-item">Dashboard</Link>
        <Link to="/addtransaction" className="menue-item">Add Transaction</Link>
        <Link to="/transactionlist" className="menue-item">Transactions</Link>
        <Link to="/report" className="menue-item">Reports</Link>
      </nav>

      <hr className="menu-bottom-line" />

      {!isLoggedIn ? (
        <div className="sidebar-bottom">
          <Link to="/register" className="menue-item">Register</Link>
          <Link to="/singIn" className="menue-item">Sign In</Link>
        </div>
      ) : (
        <div className="sidebar-bottom">
          <button onClick={handleLogOut} className="menue-item">
            Log Out
          </button>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
