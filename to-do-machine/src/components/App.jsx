import { useState } from 'react'
import { ToDo } from './to-do/ToDo.jsx';

const arrToDos = [
  { description: `Create GitHub account`, isCompleted: true },
  { description: `Make first commit`, isCompleted: true },
  { description: `Finish ToDo project`, isCompleted: false },
  { description: `Connect to an external API`, isCompleted: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='todo-component__container-background'>
        <div className='app__header-container--h1'>
          <div className='app__header-container-back--h1'>
            <h1 className='app__header--h1'>Paris' To-DoS App</h1>
          </div>
        </div>
        <div>
          <ToDo arrToDos={ arrToDos }/>
        </div>
      </div>
    </>
  )
}

export default App
