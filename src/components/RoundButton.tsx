import React from "react";

import "./RoundButton.scss";

interface RoundButtonProps {
	variant: "orange" | "red" | "azure";
	children: React.ReactNode;
	onClick?: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick, children, variant, ...props }) => {
	return (
		<button className={`round-btn ${variant}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

export default RoundButton;