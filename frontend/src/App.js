import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import ToDoView from "./component/todo/ToDoView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Addtodo from "./component/todo/AddToDos";
import Edittodo from "./component/todo/EditToDos";
import ToDoPofile from "./component/todo/ToDoPofile";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-todos"
						element={<todosView />}></Route>
					<Route
						exact
						path="/add-todos"
						element={<Addtodo />}></Route>
					<Route
						exact
						path="/edit-todo/:id"
						element={<Edittodo />}></Route>
					<Route
						exact
						path="/todo-profile/:id"
						element={<todoPofile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;