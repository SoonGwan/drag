import { useState, useEffect, MutableRefObject } from "react";

const useDrag = (element: MutableRefObject<HTMLElement | null>) => {
	const [{ cx, cy }, setOffset] = useState({ cx: 0, cy: 0 });

	useEffect(() => {
		const handleMouseDown = (event: { pageX: number; pageY: number }) => {
			const initialX = event.pageX - cx;
			const initialY = event.pageY - cy;

			const handleMouseMove = (event: { pageX: number; pageY: number }) => {
				const handleX = event.pageX - initialX;
				const handleY = event.pageY - initialY;
				setOffset({ cx: handleX, cy: handleY });
			};

			document.addEventListener("mousemove", handleMouseMove);

			document.addEventListener(
				"mouseup",
				() => {
					document.removeEventListener("mousemove", handleMouseMove);
				},
				{ once: true }
			);
		};

		if (element.current !== null) {
			element && element.current.addEventListener("mousedown", handleMouseDown);
		}
		return () => {
			element.current &&
				element.current.removeEventListener("mousedown", handleMouseDown);
		};
	}, [cx, cy, element]);

	useEffect(() => {
		if (element.current !== null) {
			if (cx < window.innerWidth - 50 && 0 < cx) {
				if (cy < window.innerHeight - 50 && 0 < cy) {
					element.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
				}
			}
		}
	}, [cx, cy, element]);
};

export default useDrag;
