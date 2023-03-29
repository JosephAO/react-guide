import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = ({ onYearSelection }) => {
	const currentYear = new Date().getFullYear();

	const yearList = () => {
		let list = [];
		for (let i = 2019; i <= currentYear; i++) {
			list.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}
		return list;
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select onChange={onYearSelection}>
					{yearList()}
					{/* <option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option> */}
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
