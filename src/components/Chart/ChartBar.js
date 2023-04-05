import React from "react";
import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
	let fillHeight = "0%";

	if (maxValue > 0) fillHeight = Math.round((value / maxValue) * 100) + "%";

	const customStyle = { height: fillHeight };

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={customStyle}></div>
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
