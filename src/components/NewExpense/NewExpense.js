import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormStub from "./ExpenseFormStub";

const NewExpense = ({ expanded, setExpanded, addNewExpense }) => {
	const newEntryHandler = (newData) => {
		const newId = Math.ceil(Math.random() * 10000).toString();

		const expenseData = { ...newData, id: newId };
		addNewExpense(expenseData);
	};

	const expandStubHandler = (booleanShowForm) => {
		setExpanded(booleanShowForm);
	};

	return (
		<div className="new-expense">
			{expanded ? (
				<ExpenseForm onCancel={() => expandStubHandler(false)} onSaveNewEntry={newEntryHandler} />
			) : (
				<ExpenseFormStub onExpandStub={() => expandStubHandler(true)} />
			)}
		</div>
	);
};

export default NewExpense;
