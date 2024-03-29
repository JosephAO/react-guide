import React, { useState } from "react";
import ExpenseList from "./components/Expense/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

function App() {
	const initialList = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14)
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12)
		},
		{
			id: "e5",
			date: new Date(2023, 4, 5),
			title: "Rent",
			amount: 1700.0
		},
		{
			id: "e6",
			date: new Date(2023, 5, 1),
			title: "Rent",
			amount: 1710.34
		}
	];

	const [expenseList, setExpenseList] = useState(initialList);
	const [showAddExpenseCard, setShowAddExpenseCard] = useState(false);

	const addNewExpense = (expenseObj) => {
		setExpenseList((prevState) => [expenseObj, ...prevState]);
	};

	return (
		<div>
			<NewExpense
				expanded={showAddExpenseCard}
				setExpanded={setShowAddExpenseCard}
				addNewExpense={addNewExpense}
			/>
			<ExpenseList expenseList={expenseList} />
		</div>
	);
}

export default App;
