import * as types from './action-types'

export const actNewTodo = (name) => {
    return {
        type: types.ACT_NEW_TODO,
        payload: name
    }
}
