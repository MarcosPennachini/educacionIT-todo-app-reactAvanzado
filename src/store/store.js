import mainReducer from '../reducers/mainReducer'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
//import {logMiddleware} from '../middlewares/logMiddleware'
//import { delayMiddleware } from '../middlewares/delayMiddleware';

const defaultData = {
    tareas: [
        
    ]
}

//const reduxConsole = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(mainReducer, defaultData, applyMiddleware(thunk));