import * as types from './action-types'
import axios from 'axios'

export const actNewTodo = (name) => {
    return {
        type: types.ACT_NEW_TODO,
        payload: name
    }
}

export const actFetchTodos = () => {
    // return {
    //     type: types.ACT_FETCH_TODO,
    //     payload: [
    //         {
    //             id: 1,
    //             name: "Estudiar React",
    //             done: false
    //         },
    //         {
    //             id: 2,
    //             name: "Estudiar React Avanzado",
    //             done: false
    //         }
    //     ]
    // }
    return function(dispatch){
        axios.get('http://localhost:3001/tareas').then((response) => {
            dispatch({
                type: types.ACT_FETCH_TODO,
                payload: response.data
            })
        })
    }
}
