import "../style/reset.css";
import "../style/AddTransaction.css";
function AddTransaction(){

    return(
        <>
         <form className="add-transaction-form">
                        <label>Type:</label>
                        <select className="select-type">
                            <option value="income">Income</option>
                            <option value="expenses">expense</option>
                        </select>
                        <label>Category:</label>
                        <select className="select-category">
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="housing">Housing</option>
                            <option value="utilities">Utilities</option>
                            <option value="internet-phone">Internet
                                &Phone</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="shopping">Shopping</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="savings">Savings</option>
                            <option value="other">Other</option>
                            <option value="salary">Salary</option>
                            <option value="freelance">Freelance</option>
                            <option value="business">Business</option>
                            <option value="investment">Investment</option>
                            <option value="gift">Gift</option>
                            <option value="bonus">Bonus</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="amount-form">
                            <label>Amount:</label>
                            <input type="number" placeholder="$" />
                            <label>Date:</label>
                            <input type="date" />
                            <label>Description</label>
                            <textarea placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="but-add-transaction"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                            </svg>
                            Save Transavtion</button>
                    </form>
        </>
    )
}
export default AddTransaction;