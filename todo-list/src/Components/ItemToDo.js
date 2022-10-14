
function ItemToDo(props){
    return(
        <li>
        <h2>{props.text}</h2>        
        <button onClick={props.onDelete}>x</button>        
        </li>
    )

}

export{ItemToDo}