import AddTodo from '../components/AddTodo';
import { connect } from 'react-redux';
import { actNewTodo } from '../actions/action-creators';

function mapDispatchToProps(dispatch) {
  return {
    agregarTarea: (name) => {
      dispatch(actNewTodo(name));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
