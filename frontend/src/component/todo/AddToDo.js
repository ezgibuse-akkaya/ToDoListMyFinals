import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddToDo = () => {
	let navigate = useNavigate();
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

	const handleInputChange = (e) => {
		setToDo({
			...todo,
			[e.target.name]: e.target.value,
		});
	};
	const saveToDo = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:8080/todos",
			todo
		);
		navigate("/view-todos");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Add ToDo</h2>
			<form onSubmit={(e) => saveToDo(e)}>
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

export default AddToDo;
