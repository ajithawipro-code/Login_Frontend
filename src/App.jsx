import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import AppRoutes from "./AppRoutes";

function App(){

 return(

  <AuthProvider>

   <TaskProvider>

    <AppRoutes/>

   </TaskProvider>

  </AuthProvider>

 );

}

export default App;