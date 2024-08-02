import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import '../../styles/ToDoView.css'; 

const ToDoView = () => {
    const [todos, setToDos] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all"); // Default filter

    useEffect(() => {
        loadToDos();
    }, []);

    const loadToDos = async () => {
        try {
            const result = await axios.get("http://localhost:8080/todos");
            if (result.status === 200) {
                setToDos(result.data);
            }
        } catch (error) {
            console.error("Error loading todos:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/todos/delete/${id}`);
            loadToDos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const handleCheckboxChange = async (id, done) => {
        try {
            await axios.put(`http://localhost:8080/todos/updateStatus/${id}`, { done });
            loadToDos();
        } catch (error) {
            console.error("Error updating todo status:", error);
        }
    };

    // Filter todos based on the selected filter
    const filteredTodos = todos.filter(todo => {
        if (filter === "all") return true;
        if (filter === "done") return todo.done;
        if (filter === "todo") return !todo.done;
        return true;
    });

    return (
        <section>
            <Search search={search} setSearch={setSearch} />
            <div className="button-container">
                <button 
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button 
                    className={filter === "done" ? "active" : ""}
                    onClick={() => setFilter("done")}
                >
                    Done
                </button>
                <button 
                    className={filter === "todo" ? "active" : ""}
                    onClick={() => setFilter("todo")}
                >
                    To Do
                </button>
            </div>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>ToDo Explanation</th>
                        <th>Status</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {filteredTodos
                        .filter((todo) =>
                            todo.firstName.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((todo, index) => (
                            <tr key={todo.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{todo.firstName}</td>
                                <td>{todo.lastName}</td>
                                <td>{todo.email}</td>
                                <td>{todo.toDoExplanation}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={todo.done}
                                        onChange={() => handleCheckboxChange(todo.id, !todo.done)}
                                    />
                                </td>
                                <td className="mx-2">
                                    <Link to={`/todo-profile/${todo.id}`} className="btn btn-info">
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <Link to={`/edit-todo/${todo.id}`} className="btn btn-warning">
                                        <FaEdit />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
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
