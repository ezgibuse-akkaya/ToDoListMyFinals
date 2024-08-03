import { useState } from "react";
import axios from "axios";

const DeleteAllTodos = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    const handleDeleteAll = async () => {
        setIsDeleting(true);
        try {
            await axios.delete("http://localhost:8080/todos");
            alert("All todos have been deleted.");
        } catch (err) {
            setError("Failed to delete todos. Please try again.");
            console.error(err);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Delete All Todos</h2>
            <button
                onClick={handleDeleteAll}
                className="btn btn-outline-danger btn-lg"
                disabled={isDeleting}
            >
                {isDeleting ? "Deleting..." : "Delete All Todos"}
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
};

export default DeleteAllTodos;
