import "../style/reset.css";
import "../style/Report.css";

function Report() {
  return (
    <>
      <div className="summery-cart">
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
              className="icon icon-tabler icon-tabler-arrows-down-up"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3l0 18" />
              <path d="M10 18l-3 3l-3 -3" />
              <path d="M7 21l0 -18" />
              <path d="M20 6l-3 -3l-3 3" />
            </svg>
            <h3>Total Income</h3>
          </div>
          <p>15.00</p>
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
              className="icon icon-tabler icon-tabler-arrows-transfer-up"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 21v-6" />
              <path d="M20 6l-3 -3l-3 3" />
              <path d="M17 3v18" />
              <path d="M10 18l-3 3l-3 -3" />
              <path d="M7 3v2" />
              <path d="M7 9v2" />
            </svg>
            <h3>Total Expenses</h3>
          </div>
          <p>15.00</p>
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
              className="icon icon-tabler icon-tabler-album"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M12 4v7l2 -2l2 2v-7" />
            </svg>
            <h3>Current Balance</h3>
          </div>
          <p>15.00</p>
        </div>
      </div>

      <div className="report">
        <div className="expenses-category">
          <h3>Expenses by Category</h3>
          <div className="pie-chart"></div>
        </div>
        <div className="income-expenses-chart">
          <h3>Income vs Expenses</h3>
          <div className="bar-chart"></div>
        </div>
      </div>
    </>
  );
}

export default Report;
