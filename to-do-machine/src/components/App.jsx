import { ToDo } from './to-do/ToDo.jsx';

function App() {
  return (
    <>
      <div className='todo-component__container-background'>
        <div className='app__header-container--h1'>
          <div className='app__header-container-back--h1'>
            <h1 className='app__header--h1'>Paris' To-DoS App</h1>
          </div>
        </div>
        <div>
          <ToDo />
        </div>
      </div>
    </>
  )
}

export default App
