import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import * as action_creators from '../actions/action-creators'

function mapStateToProps(state){
    return {
        tareas: state.tareas
    }
}

function mapDispatchToProps(dispatch){
    return {
        getTodos: () => {dispatch(action_creators.actFetchTodos())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
