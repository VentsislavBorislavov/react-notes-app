import Create from './components/Create';
import MainSection from './components/MainSection';

function App() {
	return (
		<div className="container">
			<Create />
			<MainSection isSignedIn={true} />
		</div>
	);
}

export default App;
