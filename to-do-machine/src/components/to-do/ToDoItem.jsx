import React from 'react';

const ToDoItem = ({ toDoElement }) => {
  return (
    <>
      <li>
          <span>v</span>
          <p>{toDoElement.description}</p>
          <span>{toDoElement.isCompleted ? `X` : ``}</span>
      </li>
    </>
  )
}

export {ToDoItem};
