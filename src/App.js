import "./App.css";
import Balance from "./components/balance/Balance.component";
import Transaction from "./components/transaction/Transaction.component";
import NominalAccounts from "./components/nominal accounts/NominalAccounts.component";
import History from "./components/history/History.component";

function App() {
  return (
    <div className="app">
      <h1 className="expense-tracker-title">Expense tracker</h1>
      <Balance />
      <NominalAccounts />
      <History />
      <Transaction />
    </div>
  );
}
export default App;
