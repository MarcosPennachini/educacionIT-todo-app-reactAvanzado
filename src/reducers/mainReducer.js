import * as t from '../actions/action-types'

const mainReducer = (state = {}, action) => {
    //const state = {...initialState};

    switch (action.type){

        case t.ACT_FETCH_TODO:
            return {
                ...state,
                tareas: action.payload
            }

        case t.ACT_NEW_TODO:
            // return Object.assign({}, state, {
            //     tareas: [
            //       ...state.tareas,
            //       {
            //         id: Date.now(),
            //         name: action.payload,
            //         done: false
            //       }
            //     ]
            //   })    
            return {
                tareas: [
                    ...state.tareas,
                    {
                        id: state.tareas.lenght + 1,
                        name: action.payload,
                        done: false
                    }
                ]
            }
        default:
            return state;
    }
    
}

export default mainReducer;