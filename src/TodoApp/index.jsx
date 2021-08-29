import React from "react";
import "./style.css";
import { AddTodo, TodoList, VisibilityFilters } from "./Component";

function TodoApp() {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </>
  );
}

export default TodoApp;
