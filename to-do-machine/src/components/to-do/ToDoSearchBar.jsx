import React from "react";

const ToDoSearchBar = () => {
  const [state, setState] = React.useState({
    searchValue: '',
    prueba: 'Proof'
  });

  const lookForToDo = (evento) => {
    setState({
        ...state,
        searchValue: evento.target.value
      }
    );
    console.log(`(${state.prueba})Se ha escrito: ${state.searchValue}`);
    console.log(`Se ha escrito: ${evento.target.value}`);
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
