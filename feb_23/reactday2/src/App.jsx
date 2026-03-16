/* 
what happens when data changes in react
how does react know to update
how do we run code after rendering components

Lists & Keys
apps:
product list, user list, notification, messages
-> we render the list usig map()
-> but react needs somethig special called KEYS

why Keys?
1. identify which item changed
2. improve performance
3. avoid unnecessary re-rendering

keys must: unique, stable, preferable from database(like id)
*/

import React from "react";
/* 
function App(){
  const students=[
    {id:1,name:"Navya",course:"React"},
    {id:2,name:"John",course:"JS"},
    {id:3,name:"Cary",course:"JAVA"},
    {id:4,name:"Rahul",course:"React"},
    {id:5,name:"Divya",course:"Python"},
  ];
  return(
    <div>
      <h2>Student List</h2>
      {students.map((student)=>(
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Course:{student.course}</p>
        </div>
      ))}
    </div>
  );
}
 */

/* 
//usestate hook
import Counter from "./Counter";

function App(){
  return(
    <div>
      <Counter/>
    </div>
  );
}
 */

import LifecycleDemo from "../LifecycleDemo";

function App(){
  return(
    <LifecycleDemo/>
  );
}
export default App;