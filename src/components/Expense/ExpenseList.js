import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../wrappers/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./ExpenseList.css";

export default function ExpenseList({ expenseList }) {
	const [filterYear, setFilterYear] = useState("all");

	const selectYearHandler = (e) => {
		setFilterYear(e.target.value);
	};

	const filteredList =
		filterYear !== "all"
			? expenseList.filter((item) => item.date.getFullYear().toString() === filterYear)
			: expenseList;

	let expenseListContent = (
		<h2 className="expenses-list__fallback">{`No expenses found for ${filterYear}.`}</h2>
	);

	if (filteredList.length > 0) {
		expenseListContent = filteredList.map((item) => (
			<ExpenseItem key={item.id} date={item.date} amount={item.amount} title={item.title} />
		));
	}

	return (
		<Card className="expenseList">
			<ExpenseFilter setYear={filterYear} onYearSelection={selectYearHandler} />
			{expenseListContent}
		</Card>
	);
}
