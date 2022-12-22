import React from "react";

function ListToDo(props){
    let  list = props.List
    console.log(list)
return(
    <div className="task-container" >        
        <ul>
            {props.children}
        </ul>
    </div>
)
}
export{ListToDo}