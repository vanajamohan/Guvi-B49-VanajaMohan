import React from "react";
import './index.css';
import './App.css'

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
      <div
        className="card"
        key={todo.id}
        style={{ border: "1px solid black"}}>
            <div className="m-3">
        <p>
          <b id="name">Name : </b>
         <b> {todo.todoName}</b>
        </p>
        <p>
          <b id="description">Description : </b>
          <b>{todo.description}</b>
        </p>
        <div className="mb-2">
          <label htmlFor="status" className="me-1">
            <b id="status">Status:</b>
          </label>
          <select
            className={
              todo.status === "Completed"? "completed": "notcompleted"}
            value={todo.status}
            name="status"
            onChange={(e) => updateStatus(todo.id, e.target.value)}>
            <option
              value="Completed"
              className={
                todo.status === "Completed" ? "completed" : ""}>
              Completed
            </option>
            <option
              value="Not Completed"
              className={
                todo.status !== "Completed" ? "notcompleted" : ""}>
              Not Completed
            </option>
          </select>
          </div>
        </div>
        <br />
        <div className="text-center m-3 p-2">
          <button
            className="editbtn"
            onClick={() => editTodo(todo.id)}
            type="button"
          >
            Edit
          </button>
          <button
            className="deletebtn"
            onClick={() => deleteTodo(todo.id)}
            type="button">
            Delete
          </button>
        </div>
      </div>
  );
}
