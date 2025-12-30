import "../style/reset.css";
import "../style/Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="welcome-text">
          <h3>Welcome!</h3>
          <p>Here's an overview of your financial activity.</p>
        </div>

        <div className="summary-cart">
          <div className="cart">
            <div className="cart-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3v18" />
                <path d="M10 18l-3 3l-3 -3" />
                <path d="M7 21V3" />
                <path d="M20 6l-3 -3l-3 3" />
              </svg>
              <h3>Total Income</h3>
            </div>
            <p>15,000</p>
          </div>

          <div className="cart">
            <div className="cart-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 21v-6" />
                <path d="M20 6l-3 -3l-3 3" />
                <path d="M17 3v18" />
                <path d="M10 18l-3 3l-3 -3" />
              </svg>
              <h3>Total Expenses</h3>
            </div>
            <p>8,500</p>
          </div>

          <div className="cart">
            <div className="cart-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M12 4v7l2 -2l2 2v-7" />
              </svg>
              <h3>Current Balance</h3>
            </div>
            <p>6,500</p>
          </div>
        </div>

        <div className="button-add">
          <button className="button-income">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Add Income
          </button>

          <button className="button-expenses">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Add Expenses
          </button>
        </div>

        <div className="recent-transaction">
          <h2>Recent Transactions</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01/15/2024</td>
                <td>Expense</td>
                <td>Food</td>
                <td>-$150.00</td>
                <td>Monthly groceries</td>
              </tr>
              <tr>
                <td>01/10/2024</td>
                <td>Income</td>
                <td>Salary</td>
                <td>+$2,000.00</td>
                <td>January salary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
