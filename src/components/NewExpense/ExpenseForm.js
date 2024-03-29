import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveNewEntry, onCancel }) => {
	const [input, setInput] = useState({
		title: "",
		amount: +null,
		date: ""
	});

	const setTitleHandler = (e) =>
		setInput((prevState) => {
			return { ...prevState, title: e.target.value };
		});

	const setAmountHandler = (e) =>
		setInput((prevState) => {
			return { ...prevState, amount: +e.target.value };
		});

	const setDateHandler = (e) =>
		setInput((prevState) => {
			return { ...prevState, date: new Date(e.target.value) };
		});

	const submitFormHandler = (e) => {
		e.preventDefault();
		if (input.title && input.amount && input.date) {
			onSaveNewEntry(input);
			setInput({ title: "", amount: "", date: "" });
		}
	};

	const cancelFormHandler = (e) => {
		e.preventDefault();
		onCancel();
	};

	return (
		<form onSubmit={submitFormHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={input.title} onChange={setTitleHandler}></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min={0.01}
						step={0.01}
						value={input.amount}
						onChange={setAmountHandler}></input>
				</div>
				<div className="new-expense__control">
					<label>Date</label>

					<input
						type="date"
						min="2019-01-01"
						max={new Date().toLocaleDateString("en-CA")}
						value={input.date ? input.date.toLocaleDateString("en-CA") : ""}
						onChange={setDateHandler}></input>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="button" onClick={cancelFormHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
