import ExpenseList from "./components/Expense/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
function App() {
	return (
		<div>
			<NewExpense />
			<ExpenseList />
		</div>
	);
}

export default App;
