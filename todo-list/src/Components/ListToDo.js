import React from "react";

function ListToDo(props){
    let  list = props.List
    console.log(list)
return(
    <div className="LisToDo"  >
        <h1>{} tareas resueltas de {list.length}</h1>
        <ul>
            {props.children}
        </ul>
    </div>
)
}
export{ListToDo}