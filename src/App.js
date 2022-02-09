import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes';

function App() {
	return (
		<div className="App font-sans bg-rose-50">
			<BrowserRouter>
				<Routing/>
			</BrowserRouter>
		</div>
	);
}

export default App;
