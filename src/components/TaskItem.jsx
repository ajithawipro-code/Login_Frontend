import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {

 const { toggleTask, deleteTask } = useContext(TaskContext);

 return (

  <div>

   <h3 style={{textDecoration: task.status ? "line-through" : "none"}}> {task.title} </h3>

   <p>{task.description}</p>

   <button onClick={() => toggleTask(task.id)}> Toggle</button>

   <button onClick={() => deleteTask(task.id)}> Delete </button>

  </div>

 );

}

export default TaskItem;