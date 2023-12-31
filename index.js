import "./App.css";
import {useState} from "react";

function App() {

  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState(" ");

  // começando a resolução

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask= () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask= (taskName) => {
    setTodoList (todoList.filter((task) => task!== taskName));
  };

return (
  <div className="App">
    <div className="addTask">
      <input onchange = { handleChange} />

      <button onClick = { addTask }>Add Task</button>
      
    </div>
    
    <div className= "List" >

    {todoList.map ((task) => {
      return (
        <div>

          <h1> {task} </h1>
          <button onClick = {() => deleteTask(task)}> x </button>

        </div>
      );

    })}
    
    </div>
    
    </div>
     
  );

}
export default App;

