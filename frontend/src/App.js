// Tüm import ifadelerini dosyanın en üstüne taşıyın
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (Popper.js dahil)
import './App.css';
import Home from './Home';
import ToDoView from './component/todo/ToDoView';
import NavBar from './component/common/NavBar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import AddToDo from './component/todo/AddToDo.js';
import EditToDo from './component/todo/EditToDo.js';
import PersonProfile from './component/todo/PersonProfile.js';

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/view-todos" element={<ToDoView />} />
					<Route exact path="/add-todos" element={<AddToDo />} />
					<Route exact path="/edit-todo/:id" element={<EditToDo />} />
					<Route exact path="/todo-profile/:id" element={<PersonProfile />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
