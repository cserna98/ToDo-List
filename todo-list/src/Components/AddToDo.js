import React, { useRef } from "react";

function AddToDo(props){
    let List= props.List; 
    let textInput = useRef();
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
        
    }
    
return(
    <div>
        <form onSubmit={Add}>
            <input placeholder="Ingrese Tarea" type="input" ref={textInput} ></input>
            <button type="text"  >+</button>
        </form>
        
    </div>    
)
};

export{AddToDo}