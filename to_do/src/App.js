import React from 'react'
import {ItemToDo} from './Components/ItemToDo'
import {ListToDo} from './Components/ListToDo'
import {AddToDo} from './Components/AddToDo'
import {SearchToDo} from './Components/SearchToDo'
import "./styles/app.css"




function App() {
  let taskList = [{

    text : 'Terminar Todo' ,
    State : false,
    id : 1
  },
  {
    text : 'Estudiar Ingles' ,
    State : false,
    id : 2
  },
  {
    text : 'Estudiar JAVA' ,
    State : false,
    id : 3
  }
  ];



  let [Search,SetSearch] = React.useState("")
  let onSearch =  (e)=>{
    console.log(" on change estoy funcionando");
    Search = e.target.value;
    console.log(Search);

  }

  let [List,setList] = React.useState(taskList)
    console.log(List)
    const Delete =(id)=>{
        const TaskIndex = List.findIndex( task => task.id === id);  
        console.log(TaskIndex)
        let newList = [...List]
        newList.splice(TaskIndex, 1)
        console.log(newList)
        setList(newList)
        console.log(List)
    }

    let textInput = React.useRef();

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
        setList(newlist)
        e.preventDefault()
        textInput.current.value=""
        
    }  


  return (
    <div className="container">
      <div className="list">
        <h1>TO DO TASK</h1>
      <AddToDo  List={List} setList={setList} onSubmit={Add} textInput={textInput} />
      <ListToDo List={List} setList={setList}>
        { List.map(element=>(
      <ItemToDo 
        key={element.id}
        text={element.text}
        id={element.id}
        onDelete= {()=>Delete(element.id)}>   
      </ItemToDo>  
    ))}  
    </ListToDo>   

      </div>

      <div className="Find">
        <SearchToDo List={List}  onSearch={onSearch} />
      </div>
    
    </div>
  );
}

export default App;
