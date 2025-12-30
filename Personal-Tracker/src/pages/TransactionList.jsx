import "../style/reset.css";
import "../style/TransactionList.css";

function TransactionList() {
  return (
    <>
        <h1>Transaction List</h1>

        <div className="controls">
          <input type="text" placeholder="Search..." />

          <select className="select-category">
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="internet-phone">Internet & Phone</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
            <option value="savings">Savings</option>
            <option value="salary">Salary</option>
            <option value="freelance">Freelance</option>
            <option value="business">Business</option>
            <option value="investment">Investment</option>
            <option value="gift">Gift</option>
            <option value="bonus">Bonus</option>
            <option value="other">Other</option>
          </select>

          <select className="select-type">
            <option value="income">Income</option>
            <option value="expenses">Expense</option>
          </select>

          <button className="add-btn">+ Add Transaction</button>
        </div>

        <div className="table-wrapper">
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
                <td>Groceries</td>
                <td className="expense">-$150.00</td>
                <td>Supermarket</td>
              </tr>

              <tr>
                <td>01/12/2024</td>
                <td>Income</td>
                <td>Salary</td>
                <td className="income">+$2,000.00</td>
                <td>Monthly Salary</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
     
    </>
  );
}

export default TransactionList;
