import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = ({ setYear, onYearSelection }) => {
	const yearList = () => {
		const currentYear = new Date().getFullYear();
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
				<select value={setYear} onChange={onYearSelection}>
					<option key={0} value={"all"}>
						ALL
					</option>
					{yearList()}
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
