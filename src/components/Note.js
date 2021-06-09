import React from 'react';

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

function Note({ seconds, text, color }) {
	const date = new Date(seconds * 1000);
	console.log(seconds);
	const simpifiedDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

	return (
		<div className={`note bg-${color}`}>
			<p className="text">{text}</p>
			<p className="date">{simpifiedDate}</p>
		</div>
	);
}

export default Note;
