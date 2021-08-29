import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo";
import { getTodosByVisibilityFilter } from "../../../stores/TodoApp/selectors";
import "./style.css";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}-${index}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
