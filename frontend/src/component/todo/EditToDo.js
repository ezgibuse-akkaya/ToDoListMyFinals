import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditToDo = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [todo, setToDo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		toDoExplanation: "",
	});
	const {
		firstName,
		lastName,
		email,
		toDoExplanation,
	} = todo;

	useEffect(() => {
		loadToDo();
	}, []);

	const loadToDo = async () => {
		const result = await axios.get(
			`http://localhost:8080/todos/todo/${id}`
		);
		setToDo(result.data);
	};

	const handleInputChange = (e) => {
		setToDo({
			...todo,
			[e.target.name]: e.target.value,
		});
	};
	const updateToDo = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/todos/update/${id}`,
			todo
		);
		navigate("/view-todos");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit ToDo</h2>
			<form onSubmit={(e) => updateToDo(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
					    Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="toDoExplanation">
						To Do Explanation
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="toDoExplanation"
						id="toDoExplanation"
						required
						value={toDoExplanation}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-todos"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditToDo;