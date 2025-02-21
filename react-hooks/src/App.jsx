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

  return (
    <>
     <ul>
        {todos.map(item => (
          <Task key = {item.id} todo={item.title}/>
          
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
          id: todos.length,
          title:title
        }]);
      }}>Add</button>
       
    </>
  )
}

function Task ( { todo }) {
  const [todoCheck, setTodoCheck] = useState(false)
//todo = 'task1'

let crossDeciderLocal
let crossLocal = "line-through"
let noCrossLocal = ""
todoCheck ? crossDeciderLocal=crossLocal: crossDeciderLocal=noCrossLocal

function handleChangeLocal(e) { 
setTodoCheck(e.target.checked)
}
  return (
  <label>
        <input
        type="checkbox"
       
        onChange={handleChangeLocal}
      />
     
        <span style={{textDecoration: crossDeciderLocal}}>{todo}</span>
        
        </label> 
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


{
  /*
  #Problem: it checks everything at once 
  #checking individual boxes 
  # Make a function to cross text 
  # Create a button to add items 
  */
}