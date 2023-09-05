import React from 'react';

const ToDoItem = ({ toDoElement }) => {
  return (
    <>
      <li className='todo-item'>
      <span className={`todo-item__icon ${toDoElement.isCompleted ? "todo-item__icon--check-deactivated" : "todo-item__icon--check-activated"}`}>v</span>
        <p className={`todo-item__p ${toDoElement.isCompleted ? "todo-item__p--completed" : ""}`}>{toDoElement.description}</p>
        <span className={`todo-item__icon ${toDoElement.isCompleted ? "todo-item__icon--delete" : ""}`}>X</span>
      </li>
    </>
  )
}

export {ToDoItem};
