import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./App.css";

import { input, submitInput } from "./slice";

function App() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState();

  const inputInfo = useSelector(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitInput(newTask));
  };

  return (
    <>
      <div className="input"></div>
      <div className="App">
        <form className="task-submit-form" onSubmit={handleSubmit}>
          <label htmlFor="task-type">Task Name</label>
          <input
            id="task-type"
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button type="submit">Submit Task</button>
          <button
            onClick={() => {
              let item = document.querySelector(".input");
              let div = document.createElement("div");
              div.innerHTML = inputInfo;
              item.appendChild(div);
            }}
          >
            Retrieve data
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
