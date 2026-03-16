import React, { useState } from "react";

function App(){
  const[task, setTask]=useState("");
  const[taskList, setTaskList]=useState([]);

  const addTask = ()=>{
    if(task!==""){
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const deleteTask = (index) =>{
    const newList = taskList.filter((_, i)=> i !== index);
    setTaskList(newList);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Task List App</h1>
      <input 
       type="text"
       value={task} 
       placeholder="Enter Task"
       onChange={(e)=>setTaskList(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {taskList.map((t, index)=>(
          <li key={index}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 





/* 
import React, { useState } from "react";

function App(){
  const[task, setTask]=useState("");
  const[taskList, setTaskList]=useState([]);

  const addTask = ()=>{
    if(task!==""){
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const deleteTask = (index) =>{
    const newList = taskList.filter((_, i)=> i !== index);
    setTaskList(newList);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Task List App</h1>
      <input 
       type="text"
       value={task} 
       placeholder="Enter Task"
       onChange={(e)=>setTaskList(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {Array.isArray(taskList) &&
          taskList.map((t, index) =>(
            <li key={index}>
              {t}
              <button onClick={()=> deleteTask(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App; 

 */