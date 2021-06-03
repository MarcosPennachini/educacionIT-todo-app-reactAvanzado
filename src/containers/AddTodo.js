import AddTodo from '../components/AddTodo'
import {connect} from 'react-redux'
import * as action_creators from '../actions/action-creators'

function mapDispatchToProps(dispatch) {
    return {
        agregarTarea: (name) => {
            dispatch(action_creators.actNewTodo(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)