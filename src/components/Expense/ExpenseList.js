import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../wrappers/Card";

import "./ExpenseList.css";

export default function ExpenseList() {
	const expenseList = [
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
	return (
		<Card className="expenseList">
			{expenseList.map((item) => {
				return (
					<ExpenseItem key={item.id} date={item.date} amount={item.amount} title={item.title} />
				);
			})}
		</Card>
	);
}
