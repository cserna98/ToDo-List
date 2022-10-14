import React from "react";

function ListToDo(props){
    let List=props.List;
return(
    <div>
        <ul>
        { List.map( element => (
        <li>
        {element.text}
        <button>x</button>
        </li>
        
        ))}
        </ul>
    
    </div>
)
}
export{ListToDo}