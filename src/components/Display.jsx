import React, { useState } from "react";

const Display = (props) => {
  const { toDoList, setToDoList } = props;

  const handleComplete = (toDo) => {
    toDo.complete = !toDo.complete;
    setToDoList([...toDoList]);
  };

  const remove = (id) => {
    setToDoList(toDoList.filter((toDo, index) => toDo.id !== id));
  };
  return (
    <div>
      <div className="flex flex-row justify-around">
        {toDoList.map((toDo, index) => (
          <div
            className="m-2 border-2 p-2 rounded border-blue-400 w-52 h-52 flex flex-col justify-between items-center"
            key={index}
          >
            {toDo.complete ? (
              <p className="font-bold text-xl">{toDo.toDo}</p>
            ) : (
              <p className="font-bold text-xl">{toDo.toDo}</p>
            )}
            <div>
              <label>Complete Task: </label>
              <input
                type="checkbox"
                value={toDo.complete}
                onChange={() => handleComplete(toDo)}
              />
            </div>
            {toDo.complete ? (
              <p className=" text-green-500 font-bold">Completed!</p>
            ) : (
              <div className="h-5">
                <p className=" text-red-600 font-bold">Not Done Yet</p>
              </div>
            )}
            <button
              className="border-2 border-gray-400 rounded bg-gray-400 shadow-md hover:bg-gray-200 w-16"
              onClick={() => remove(toDo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
