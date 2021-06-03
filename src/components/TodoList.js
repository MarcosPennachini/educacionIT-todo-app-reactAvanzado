import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends Component {

    render() { 
        return ( 
            <ul className="list-group">
                { this.props.tareas.map( tarea => {
                    return <li key={tarea.id} className="list-group-item"> {tarea.name} </li>
                }) }
            </ul>
         );
    }
}
 
export default TodoList;
