import React, { useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo.jsx";
import Display from "./components/Display.jsx";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <h1 className="font-extrabold text-4xl">To Do List:</h1>
      <CreateToDo toDoList={toDoList} setToDoList={setToDoList} />
      <Display toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
