import React from "react";

import "./Tooltip.scss";

interface TooltipProps {
	children: React.ReactNode;
	className: string;
	title: string;
}


const Tooltip: React.FC<TooltipProps> = ({ children, className, title }) => {
	return (
		<span className={`tooltip ${className}`} data-tooltip={title}>
			{children}
		</span>
	);
}

export default Tooltip;
