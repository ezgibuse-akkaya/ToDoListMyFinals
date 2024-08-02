import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus, FaList, FaTrashAlt } from "react-icons/fa";
import './styles/Home.css'; // CSS dosyasını içe aktar

const Home = () => {
    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1 className="display-4">ToDo List Application</h1>
                <p className="lead">Managing your daily tasks has never been this easy!</p>
            </header>

            <section className="text-center mb-5">
                <div className="row">
                    <div className="col-md-4 mb-3 d-flex">
                        <div className="card shadow-lg flex-fill custom-card">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">Add New ToDo</h5>
                                <p className="card-text text-center">
                                    Keep your tasks organized by adding new ToDos. Stay on top of your responsibilities and never miss a deadline.
                                </p>
                                <Link to="/add-todos" className="btn btn-primary mt-auto mx-auto d-block">
                                    <FaPlus /> Add New
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 d-flex">
                        <div className="card shadow-lg flex-fill custom-card">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">View Your ToDos</h5>
                                <p className="card-text text-center">
                                    Manage your current tasks efficiently. View and edit existing ToDos to ensure your list is up-to-date.
                                </p>
                                <Link to="/view-todos" className="btn btn-success mt-auto mx-auto d-block">
                                    <FaList /> View All
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 d-flex">
                        <div className="card shadow-lg flex-fill custom-card">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">Delete All ToDos</h5>
                                <p className="card-text text-center">
                                    Quickly clear out all your tasks. Use this option with caution as it will remove all ToDos from your list.
                                </p>
                                <button className="btn btn-danger mt-auto mx-auto d-block" onClick={() => handleDeleteAll()}>
                                    <FaTrashAlt /> Delete All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center mt-5">
                <p>&copy; {new Date().getFullYear()} ToDo List Application. All rights reserved.</p>
            </footer>
        </div>
    );
};

const handleDeleteAll = async () => {
    if (window.confirm("Are you sure you want to delete all ToDos? This action cannot be undone.")) {
        try {
            await axios.delete("http://localhost:8080/todos/deleteAll");
            window.location.reload(); // Reload the page to update the list
        } catch (error) {
            console.error("An error occurred while deleting all ToDos:", error);
        }
    }
};

export default Home;
