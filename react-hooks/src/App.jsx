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
  const [input, setInputName] = useState('')
  const [isChecked, setIsChecked] = useState(false);

  //id of todos
const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0;

  function deleteTodo(id) {
    console.log('delete me', id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  

 
  return (
    <>
    

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
 

function Task ( { todo , deleteButton }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInputName] = useState('')
  const [todoCheck, setTodoCheck] = useState(false)
  const [title, setTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);

let crossDeciderLocal
let crossLocal = "line-through"
let noCrossLocal = ""
todoCheck ? crossDeciderLocal=crossLocal: crossDeciderLocal=noCrossLocal

function handleChangeLocal(e) {
  
 setInputName(e.target.value)
 
}

function checkTheBox(e) {
 
  setIsChecked(!isChecked);
}

function strikeThrough (e){
  setTodoCheck(e.target.checked)
}

let saveContent  = 
 <>
   
<label>
      <input
      placeholder="Add task"
      value={input}
      checked={isChecked} 
      onChange={(e) => {
        handleChangeLocal(e);
        checkTheBox(e);
      }}
    />
     {/*<span style={{textDecoration: crossDeciderLocal}}>{input}</span> */}
      </label> 
    <div id="buttonsAddEdit">
     
      <button onClick={() => setIsEditing(true)}>Save</button>
      </div>
      </>   

let editContent   =   
 <>   
<label>
      <input
      type="checkbox"
      value={(input==undefined?null:input)}
      onChange={(e) => {
        handleChangeLocal(e);
        strikeThrough(e);
      }}
    />
   
      <span style={{textDecoration: crossDeciderLocal}}>{input}</span>
      </label> 
    <div id="buttonsAddEdit">
      <button onClick={deleteButton}>Delete</button>
      <button onClick={() => setIsEditing(false)}>Edit</button>
        </div>
       
      </>




return isEditing ? editContent : saveContent;

    
}


function App() {
 
  
 
  return (
    <>
     
     
        
    <div id="all-checkboxes">
      
      <Task />
      <AddTodo />

        </div>      
      
     

       
     
      
    </>
  )
}

export default App


