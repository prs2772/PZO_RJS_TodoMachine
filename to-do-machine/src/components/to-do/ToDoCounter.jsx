import React from "react";

const ToDoCounter = ({ numTotal, numCompleted }) => {
  return (
    <>
      <p className="todo-counter__header">Haz completado <span className="todo-counter__header todo-counter__header--bold">{numCompleted}</span> de <span className="todo-counter__header todo-counter__header--bold">{numTotal} ({parseFloat(numCompleted / numTotal * 100).toFixed(2)}%)</span></p>
    </>
  );
}

export {ToDoCounter};
