import React from "react";

const ToDoAdd = () => {
  return (
    <>
      <button 
        className="todo-add" 
        onClick={addToDo}>+
      </button>
    </>
  );
}

const addToDo = (evento) => {
  console.log(`Le diste click a añadir todo ${evento}`);
}

export { ToDoAdd };
