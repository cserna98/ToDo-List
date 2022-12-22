import "../styles/app.css"

function AddToDo(props){

        /*let textInput = useRef();
    const Add =(e)=>{
        console.log(textInput)        
        let newTask = {
        text : textInput.current.value,
        state : false,
        id : (List.length + 1 )
        } 
        let  newlist = [...List]
        newlist.push(newTask)               
        console.log(newlist)
        props.setList(newlist)
        e.preventDefault()
        textInput.current.value=""
        
    }*/
    
return(
    <div>
        <form onSubmit={props.onSubmit} >
            <input placeholder="Ingrese Tarea" type="input" ref={props.textInput} ></input>
            <button type="text"  >+</button>
        </form>
        
    </div>    
)
};

export{AddToDo}