import { useState, useEffect } from 'react';

const useButtonClass = (clicked) => {
	const [ btnClass, setBtnClass ] = useState('');

	const changeClassName = () => {
		if (clicked) {
			setBtnClass('clicked');
		} else {
			setBtnClass('');
		}
	};

	useEffect(
		() => {
			changeClassName();
		},
		[ clicked ]
	);

	return btnClass;
};

export default useButtonClass;
