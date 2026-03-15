import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { AddTask } from "./components/AddTask";
import TaskList from "./components/TaskList";

function AppRoutes(){

 return(

  <BrowserRouter>

   <Routes>

    <Route path="/tasks" element={
      <>
       <AddTask/>
       <TaskList/>
      </>
    } />

    <Route path="/login" element={<Login/>} />

    <Route path="/" element={<Signup/>} />

   </Routes>

  </BrowserRouter>

 );

}

export default AppRoutes;