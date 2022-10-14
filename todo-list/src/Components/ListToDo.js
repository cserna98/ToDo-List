import React from "react";

function ListToDo(props){
    
return(
    <div>
    <ul>
        {props.children}
    </ul>
    </div>
)
}
export{ListToDo}