
function ItemToDo(props){
    return(
        <li>
        <h2>{props.text}</h2>        
        <button onClick={props.onDelete}>x</button> 
        <input type="checkbox"/>       
        </li>
    )

}

export{ItemToDo}