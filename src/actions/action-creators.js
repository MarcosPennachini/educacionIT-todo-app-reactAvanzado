import axios from 'axios';
import { ACT_FETCH_TODO, ACT_NEW_TODO } from './action-types';

export const actNewTodo = (name) => {
  return {
    type: ACT_NEW_TODO,
    payload: name,
  };
};

export const actFetchTodos = () => {
  return function (dispatch) {
    axios.get('http://localhost:3001/tareas').then((response) => {
      dispatch({
        type: ACT_FETCH_TODO,
        payload: response.data,
      });
    });
  };
};
