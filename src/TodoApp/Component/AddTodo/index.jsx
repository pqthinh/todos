import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../stores/TodoApp/actions";
import "./style.css";

const AddTodo = (props) => {
  const { addTodo } = props;
  const [input, setInput] = useState("");

  const updateInput = useCallback((input) => {
    setInput(input);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (!input) return;
    addTodo(input);
    setInput("");
  }, [addTodo, input]);

  return (
    <div className="add-todo">
      <textarea
        onChange={(e) => updateInput(e.target.value)}
        value={input}
        placeholder="Content todo ..."
      />
      <button className="add-todo_button" onClick={() => handleAddTodo()}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
