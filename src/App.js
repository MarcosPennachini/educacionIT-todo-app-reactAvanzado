import 'bootstrap/dist/css/bootstrap.css';
import AddTodo from './components/AddTodo';
import TodoList from './containers/TodoList';
import {Provider} from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <header className="alert alert-primary">
        <h1>Todo list</h1>
      </header>
      <main className="container text-center">
        <div className="row">
          <div className="col-md-7">
            <TodoList />
          </div>
          <div className="col-md-5">
            <AddTodo 
              agregarTarea={ (tarea) => {console.log(tarea)} }
            />
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
