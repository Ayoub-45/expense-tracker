import React from "react";
import "./Transaction.styles.css";
function Transaction() {
  return (
    <div className="transaction-container">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            placeholder="Enter text"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            type="text"
            className="input "
            placeholder="Enter amount"
            id="amount"
          />
        </div>
        <button type="submit" className="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default Transaction;
