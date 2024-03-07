import React from "react";
import "./NominalAccounts.styles.css";
function NominalAccounts() {
  return (
    <div className="nominal-accounts-container">
      <div className="expense expense-income">
        <span>Expenses</span> <div className="value">$240.0</div>
      </div>
      <div className="income expense-income">
        <span>amount</span> <div className="value">$240.0</div>
      </div>
    </div>
  );
}

export default NominalAccounts;
