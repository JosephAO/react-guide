import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addNewExpense }) => {
	const newEntryHandler = (newData) => {
		const newId = Math.ceil(Math.random() * 10000).toString();

		const expenseData = { ...newData, id: newId };
		addNewExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveNewEntry={newEntryHandler} />
		</div>
	);
};

export default NewExpense;
