
import { useState } from 'react';
import AddTask from './AddTask/AddTask';
import './App.css';
import TaskList from './TaskList/TaskList';

function App() {
const [todos, seTtodos] = useState([
  {
    id:Math.random(),
  task:"Learn HTML",
  isDone:true
  },
  {
    id:Math.random(),
  task:"Learn CSS",
  isDone:true
  },
  {
    id:Math.random(),
  task:"Learn JAVASCRIPT",
  isDone:true
  }
  
])
const handleAdd = (taskName) => {
  seTtodos([...todos,{id:Math.random(),task:taskName,isDone:false}])
}
const handleDelete = (idTask) => {
  seTtodos(todos.filter(elt=>elt.id!==idTask))
}
const handleComplete=(idTask)=>{
seTtodos(todos.map(elt=>elt.id===idTask?{...elt,isDone:!elt.isDone}:elt))}


  return (
    <div className="app">
    <AddTask handleAdd={handleAdd} />
    <TaskList todos={todos} handleAdd={handleAdd} handleComplete={handleComplete} handleDelete={handleDelete}/>

    </div>
  );
}

export default App;
