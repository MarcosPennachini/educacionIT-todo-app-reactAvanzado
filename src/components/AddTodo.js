import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const AddTodo = (agregarTarea) => {

    const [tarea, setTarea] = useState('');
    
    return (
        <form onSubmit={ () => agregarTarea(tarea)}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese tarea" 
                    onChange={ (e) => {setTarea(e.target.value)}}
                />
            </div>
            
            <button  
                type="submit" 
                className="btn btn-outline-primary mt-2 float-end"
            >
                Agregar
            </button>
        </form>    
    )
}

export default AddTodo;
