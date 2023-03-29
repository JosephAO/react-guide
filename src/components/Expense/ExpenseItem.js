import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../wrappers/Card";
import React, { useState } from "react";

const ExpenseItem = ({ title, date, amount }) => {
	const [myTitle, setMyTitle] = useState(title);

	const changeTitleHandler = () => {
		setMyTitle("Updated");
		console.log(`${myTitle} clicked`);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{myTitle}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={changeTitleHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
