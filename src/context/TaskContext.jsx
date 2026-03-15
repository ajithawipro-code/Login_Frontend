import { createContext, useState, useEffect } from "react";
import { addTaskAPI, deleteTaskAPI, getTasksAPI, updateTaskAPI } from "../api/axios.api";


export const TaskContext = createContext();

export const TaskProvider = ({children}) =>{

    const [tasks,setTasks] = useState([]);

    const getTasks = async () =>{

        const res= await getTasksAPI();
        setTasks(res.data.data);

    }

    useEffect(()=>{

        const token = localStorage.getItem("token");

        if(token){

        getTasks();
        }

    },[]);

    const addTask = async(task) =>{

        await addTaskAPI(task);
        getTasks()

    }

    const toggleTask = async (id) =>{

        await updateTaskAPI(id);
        getTasks();

    }

    const deleteTask = async (id) =>{

        await deleteTaskAPI(id);
        getTasks();

    }

    return (

        <TaskContext.Provider value = {{tasks, addTask, toggleTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )



}