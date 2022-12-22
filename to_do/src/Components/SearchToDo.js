import React from "react";

function SearchToDo(props){
    let contador = "xx"
    let list = props.List
    return(
        <div className="Search">
            <h1>{contador} tareas resueltas de {list.length}</h1>
            <input onChange={props.onSearch} placeholder="Buscar tarea"/>
        </div>                
    )
}
export{SearchToDo}