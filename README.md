# Todo-app - EducacionIT

Todo list app para curso de **React.js Avanzado** en _EducacionIT_

![coding gif](https://media.giphy.com/media/MdA16VIoXKKxNE8Stk/giphy.gif)

## Construida con:

- Create-react-app
- Redux
- Redux-thunk
- Axios
- Json server

---

Para poner en marcha el servidor, primero tenemos que instalarlo de forma global:

`npm i -g json-server`

Una vez instalado, corremos el siguiente comando:

`json-server --watch db.json --port 3001`

Le decimos al servidor json que corra en el puerto 3001 (por defecto lo hace en el puerto 3000, que es donde tenemos corriendo nuestra app react)

---

# Redux-thunk

Implementar redux-thunk en una app de todo list, usando **axios**.
Redux-thunk es una librería que nos permite retornar funciones en los action-creators, en vez de únicamente objetos planos. Podemos entonces, por ejemplo, realizar llamadas asíncronas en los actions.

## Instalación

1. Tener instalada la librería redux y react-redux en el proyecto:

   ```git
   npm i --save redux react-redux
   ```

2. Instalar redux-thunk:
   ```git
   npm i --save redux-thunk
   ```

### En el store:

Necesitamos traernos **thunk** de la librería redux-thunk.

```javascript
//Importamos nuestro reducer
import mainReducer from '../reducers/mainReducer';
//Importamos funcionalidades de redux para nuestro store
import { createStore, applyMiddleware } from 'redux';
//Importamos thunk
import thunk from 'redux-thunk';
```

Exportamos nuestro store:

```javascript
//Exportamos nuestro store que se actualiza mediante mainReducer, y es observado por nuestro middleware (thunk en nuestro caso).
export default createStore(mainReducer, defaultData, applyMiddleware(thunk));
```

### En nuestro action-creator:

Importamos la librería **axios**:

```javascript
import axios from 'axios';
import { ACT_FETCH_TODO } from './action-types';
```

Exportamos nuestro action, que en este caso, retorna una función que obtiene un listado de tareas y las despacha al reducer:

```javascript
export const actFetchTodos = () => {
  return function (dispatch) {
    axios.get('http://localhost:3001/tareas').then((response) => {
      //Despachamos nuestra acción al reducer
      dispatch({
        type: ACT_FETCH_TODO,
        payload: response.data,
      });
    });
  };
};
```

### En nuestro container de **_todos_**:

Conectamos nuestro componente **TodoList** con nuestro store de redux.

```javascript
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { actFetchTodos } from '../actions/action-creators';

function mapStateToProps(state) {
  return {
    tareas: state.tareas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => {
      dispatch(actFetchTodos());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```
