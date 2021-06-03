import mainReducer from '../reducers/mainReducer'
import {createStore} from 'redux'

const defaultData = {
    tareas: [
        {
            id: Date.now(),
            name: "Estudiar React",
            done: false
        }
    ]
}

export default createStore(mainReducer, defaultData);