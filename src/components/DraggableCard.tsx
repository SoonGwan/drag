import React, { useRef } from "react";
import useDrag from "../lib/useDrag";

const DraggableCard = ({ children }: any) => {
	const cardRef = useRef(null);
	useDrag(cardRef);

	return (
		<div className="wrapper" ref={cardRef}>
			{children}
		</div>
	);
};

export default DraggableCard;
