import Create from './components/Create';
import MainSection from './components/MainSection';
import DeleteNote from './components/DeleteNote';
import { useSelector } from 'react-redux';

function App() {
	const deletingNoteId = useSelector((state) => state.deleteNote);

	return (
		<div className="container">
			<Create />
			<MainSection />
			{deletingNoteId && <DeleteNote noteId={deletingNoteId} />}
		</div>
	);
}

export default App;
