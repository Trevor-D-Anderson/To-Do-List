import React, { useState } from "react";

const CreateToDo = (props) => {
  const { toDoList, setToDoList } = props;

  const [toDo, setToDo] = useState("");
  const [complete] = useState(false);

  const createToDo = (e) => {
    e.preventDefault();

    setToDoList([
      ...toDoList,
      {
        toDo: toDo,
        complete: complete,
        id: Math.floor(Math.random() * 10000).toString(),
      },
    ]);
    setToDo("");
  };
  return (
    <div className="mt-4">
      <form onSubmit={createToDo}>
        <label className=" text-2xl">Create a to do: </label>
        <input
          type="text"
          className="rounded border-2 border-blue-500 mr-2"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button
          className=" bg-green-500 rounded shadow-md hover:bg-green-300 p-0.5"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateToDo;
