import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes';
import Navbar from './Navbar';

function App() {
	return (
		<div className="App font-sans bg-white">
			<BrowserRouter>
				<Navbar/>
				<Routing/>
			</BrowserRouter>
		</div>
	);
}

export default App;
