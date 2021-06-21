import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { actFetchTodos } from '../actions/action-creators';

function mapStateToProps(state) {
  return {
    tareas: state.tareas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => {
      dispatch(actFetchTodos());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
