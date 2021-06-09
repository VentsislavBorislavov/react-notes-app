import React from 'react';

function ColorButton({ setColor, color, initialColor }) {
	const selected = 'option-selected';
	const clicked = () => {
		setColor(initialColor);
	};
	return (
		<button
			className={`option option-${initialColor} bg-${initialColor} ${color === initialColor && selected}`}
			onClick={clicked}
		/>
	);
}

export default ColorButton;
