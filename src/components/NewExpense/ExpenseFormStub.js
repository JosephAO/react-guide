import React from "react";
import "./ExpenseForm.css";
const ExpenseFormStub = ({ onExpandStub }) => {
	return (
		<div>
			<div className="expense-stub__actions">
				<button onClick={onExpandStub}>Add New Expense</button>
			</div>
		</div>
	);
};

export default ExpenseFormStub;
