import TodoList from '../components/TodoList'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        tareas: state.tareas
    }
}

export default connect(mapStateToProps)(TodoList);
