import React from "react";
import ExpenseIncome from "../expense-income/ExpenseIncome.component";
import "./History.styles.css";
import ExpenseIncomeData from "../data/expenses-incomes.json";
function History() {
  return (
    <React.Fragment>
      <h3 className="history-title">History</h3>
      <hr />
      <div className="history-container">
        {ExpenseIncomeData.map((expenseIncome) => {
          return (
            <ExpenseIncome
              key={expenseIncome.id}
              expenseIncome={expenseIncome}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default History;
