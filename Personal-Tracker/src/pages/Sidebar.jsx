import { Link, NavLink } from "react-router-dom";
import "../style/reset.css";
import "../style/Sidebar.css";

function Sidebar() {
  return (

      <aside className="sidebar">
        <div className="sidebar-profile">
          <svg
            className="user-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p>Arghavan Azizi</p>
        </div>

        <nav className="sidebar-menue">
          <Link to="/" className="menue-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 4h4v6H5zM5 16h4v2H5zM15 12h4v6h-4zM15 4h4v2h-4z" />
            </svg>
            <a href="#">Dashboard</a>
          </Link>

          <Link to="/addtransaction" className="menue-item" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10h18M12 19h-6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12"   />
            </svg>
            <a href="#">Add Transaction</a>
          </Link>

          <Link to="/transactionlist" className="menue-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v16H4z" />
            </svg>
            <a href="#">Transactions</a>
          </Link>

          <Link to="/report" className="menue-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3v4h4M5 21V5a2 2 0 0 1 2-2h7l5 5v13a2 2 0 0 1-2 2z" />
            </svg>
            <a href="#">Reports</a>
          </Link>
        </nav>

        <hr className="menu-bottom-line" />

        <div className="sidebar-bottom">
          <Link to="/register" className="menue-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 8V6a2 2 0 0 1 2-2h7v16h-7a2 2 0 0 1-2-2v-2" />
              <path d="M3 12h13" />
            </svg>
            <a href="#">Register</a>
          </Link>

          <Link to="/singIn" className="menue-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 8V6a2 2 0 0 1 2-2h7v16h-7a2 2 0 0 1-2-2v-2" />
              <path d="M3 12h13" />
            </svg>
            <a href="#">Sign In</a>
          </Link>
        </div>
      </aside>

   
  );
}

export default Sidebar;
