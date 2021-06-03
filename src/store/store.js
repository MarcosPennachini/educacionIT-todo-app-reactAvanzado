import mainReducer from '../reducers/mainReducer'
import {createStore} from 'redux'

const defaultData = {
    tareas: [
        {
            id: 1,
            name: "Estudiar React",
            done: false
        },
        {
            id: 2,
            name: "Aprender Redux",
            done: false
        },
        {
            id: 3,
            name: "Conseguir trabajo",
            done: false
        }
    ]
}

export default createStore(mainReducer, defaultData);