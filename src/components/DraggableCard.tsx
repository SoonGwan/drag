import React, { useRef } from "react";
import useDrag from "../lib/useDrag";

type Props = {
	children: React.ReactChild;
};
const DraggableCard = ({ children }: Props) => {
	const cardRef = useRef(null);
	useDrag(cardRef);

	return (
		<div className="wrapper" ref={cardRef}>
			{children}
		</div>
	);
};

export default DraggableCard;
