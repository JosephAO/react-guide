import ExpenseList from "./components/Expense/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
function App() {
	const addNewExpense = (expenseObj) => {
		console.log(expenseObj);
	};

	return (
		<div>
			<NewExpense addNewExpense={addNewExpense} />
			<ExpenseList />
		</div>
	);
}

export default App;
