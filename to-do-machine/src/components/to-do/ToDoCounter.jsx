import React from "react";

const ToDoCounter = ({ numTotal, numCompleted }) => {
  return (
    <>
      <p className="todo-counter__header">Haz completado {numCompleted} de {numTotal} ({parseFloat(numCompleted / numTotal * 100).toFixed(2)}%)</p>
    </>
  );
}

export {ToDoCounter};
