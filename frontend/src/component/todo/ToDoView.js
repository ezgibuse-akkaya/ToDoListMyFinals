import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const ToDoView = () => {
	const [todos, setToDos] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadToDos();
	}, []);

	const loadToDos = async () => {
		const result = await axios.get(
			"http://localhost:8080/todos",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setToDos(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/todos/delete/${id}`
		);
		loadToDos();
	};

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>ToDoExplanation</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{todos
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
						.map((todo, index) => (
							<tr key={todo.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{todo.firstName}</td>
								<td>{todo.lastName}</td>
								<td>{todo.email}</td>
								<td>{todo.toDoExplanation}</td>
								<td className="mx-2">
									<Link
										to={`/todo-profile/${todo.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-todo/${todo.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(todo.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default ToDoView;