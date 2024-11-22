import React from "react";

import "./Tooltip.scss";

const Tooltip: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => {
	return (
		<span className="tooltip" data-tooltip={title}>
			{children}
		</span>
	);
}

export default Tooltip;
