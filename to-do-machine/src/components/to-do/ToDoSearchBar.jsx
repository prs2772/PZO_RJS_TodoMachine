import React from "react";

const ToDoSearchBar = ({ state, setState }) => {
  const lookForToDo = (evento) => {
    setState({
        ...state,
        searchValue: evento.target.value
      }
    );
  }

  return (
    <>
      <input 
        placeholder="Buscar ToDo..." 
        className="todo-search-bar__bar" 
        value={state.searchValue}
        onChange={lookForToDo}>
      </input>
    </>
  );
}

export {ToDoSearchBar};
