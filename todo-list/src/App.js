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
    id : 2
  }
  ]

  
  let [List,setList] = React.useState(taskList)
  console.log(List)
  return (
    <div>
    <AddToDo/>
    <ListToDo List={List}  />
    </div>
  );
}

export default App;
