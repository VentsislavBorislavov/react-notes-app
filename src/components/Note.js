import React from 'react';

function Note({ date, text }) {
	return (
		<div class="note note-red">
			<p class="text">{text}</p>
			<p class="date">{date}</p>
		</div>
	);
}

export default Note;
