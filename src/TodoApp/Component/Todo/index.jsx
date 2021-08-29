import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../../../stores/TodoApp/actions";
import "./style.css";

const Todo = ({ todo, toggleTodo }) => {
  console.log(todo);
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
