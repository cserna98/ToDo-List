import React from 'react'
import {ItemToDo} from './Components/ItemToDo'
import {ListToDo} from './Components/ListToDo'
import {AddToDo} from './Components/AddToDo'
import {SearchToDo} from './Components/SearchToDo'



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
  ]


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

  

  
  return (
    <div>
    <AddToDo  List={List} setList={setList} />
    <ListToDo>
        { List.map(element=>(
      <ItemToDo 
        key={element.id}
        text={element.text}
        id={element.id}
        onDelete= {()=>Delete(element.id)}>   
      </ItemToDo>  
    ))}  
    </ListToDo>     
    <SearchToDo />
    </div>
  );
}

export default App;
