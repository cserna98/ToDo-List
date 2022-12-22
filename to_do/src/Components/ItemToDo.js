
function ItemToDo(props){
    return(
        <div id="ItemToDo" className="task">
            <h2 className="task">{props.text}</h2>
            <div className="buttons">
                <input type="radio" id="checktask"/> 
                <button id="taskButton"  className="grid" onClick={props.onDelete}>x</button>
            </div>                       
        </div>
    )

}

export{ItemToDo}