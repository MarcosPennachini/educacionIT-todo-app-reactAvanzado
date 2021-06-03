import 'bootstrap/dist/css/bootstrap.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {defaultData} from './store/store'

function App() {
  return (
    <>
      <header className="alert alert-primary">
        <h1>Todo list</h1>
      </header>
      <main className="container text-center">
        <div className="row">
          <div className="col-md-7">
            <TodoList 
              tareas={defaultData.tareas}
            />
          </div>
          <div className="col-md-5">
            <AddTodo />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
