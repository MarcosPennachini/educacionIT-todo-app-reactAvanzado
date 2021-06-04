import * as types from './action-types'

export const actNewTodo = (name) => {
    return {
        type: types.ACT_NEW_TODO,
        payload: name
    }
}

export const actFetchTodos = () => {
    return {
        type: types.ACT_FETCH_TODO,
        payload: [
            {
                id: 1,
                name: "Estudiar React",
                done: false
            },
            {
                id: 2,
                name: "Estudiar React Avanzado",
                done: false
            }
        ]
    }
}
