import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const initialTodos = [{id:0, title:'task 1'}, 
 { id:1,
  title:'task 2'},

{ id:2,
  title:'task 3'}
];
console.log('todos',initialTodos)
function AddTodo () {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  //id of todos
const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0;

  function deleteTodo(id) {
    console.log('delete me', id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodo(id) {

  }
  return (
    <>
     <ul>
        {todos.map((item => (
          <Task key = {item.id} todo={item.title} 
          deleteButton={() => deleteTodo(item.id)}
          editButton={() => editTodo(item.id)}
          />)
         
        ))}
      </ul>
     <input
        placeholder="Add task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
       <button onClick={() => {

        setTitle('');
        setTodos([...todos,{
          id: newId,
          title:title
        }]);
        
      }}>Add</button>
       
    </>
  )
}

function Task ( { todo , deleteButton, editButton }) {
  const [todoCheck, setTodoCheck] = useState(false)
  

let crossDeciderLocal
let crossLocal = "line-through"
let noCrossLocal = ""
todoCheck ? crossDeciderLocal=crossLocal: crossDeciderLocal=noCrossLocal

function handleChangeLocal(e) { 
setTodoCheck(e.target.checked)
}


  return (
    <>
   
  <label>
        <input
        type="checkbox"
        onChange={handleChangeLocal}
      />
        <span style={{textDecoration: crossDeciderLocal}}>{todo}</span>
        </label> 
      <div id="buttonsAddEdit">
        <button onClick={deleteButton}>Delete</button>
        <button onClick={editButton}>Edit</button>
        </div>
        </>
  )
}

function App() {
 
  
 
  return (
    <>
     
     
        
    <div id="all-checkboxes">
      
      <AddTodo />
        </div>      
      
     

       
     
      
    </>
  )
}

export default App


