import React from "react";
import "./ExpenseIncome.styles.css";
function ExpenseIncome({ expenseIncome }) {
  return (
    <div
      className="container-expense-income"
      style={{
        borderRight: `${
          expenseIncome.amount < 0 ? "5px solid #ff0000}" : "5px solid #008000"
        }`,
      }}
    >
      <h3>{expenseIncome.name}</h3>
      <h3 style={{ marginRight: "5px" }}>{expenseIncome.amount}</h3>
    </div>
  );
}

export default ExpenseIncome;
