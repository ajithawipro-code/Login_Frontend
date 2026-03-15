import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const AddTask = () => {

 const [title,setTitle] = useState("");
 const [description,setDescription] = useState("");

 const { addTask } = useContext(TaskContext);

 const handleSubmit = () => {

  if(!title) return;

  addTask({
   title,
   description
  });

  setTitle("");
  setDescription("");

 };

 return(

  <div>

   <input type="text" placeholder="Task title"  value={title}  onChange={(e)=>setTitle(e.target.value)}
   />

   <input  type="text"  placeholder="Description"  value={description}  onChange={(e)=>setDescription(e.target.value)} />

   <button onClick={handleSubmit}>    Add Task   </button>

  </div>

 );

}
