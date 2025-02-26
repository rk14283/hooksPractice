import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function TaskList ({ todos,   onDeleteTodo, onChangeTodo }) {
  //console.log('title of first todo',todos[0].title)
  let todosTitle =[]
  function duplicateFinder(todos){
  for (let i = 0; i < todos.length; i++){
   console.log(todos[i].title)

   todosTitle.push(todos[i].title)
  }

   let dupli = todosTitle.filter((value, index) => 
     todosTitle.indexOf(value) !== index && todosTitle.lastIndexOf(value) === index);
 
 //console.log(dupli);
 
return dupli


}

let duplicatedText = duplicateFinder(todos)

console.log('duplicated text',duplicatedText)
let lastElement = todosTitle[todosTitle.length -1]
console.log('type of last Element',typeof lastElement)
 if(duplicatedText.includes(lastElement)){
  alert(lastElement +` already exists`)
  
  }







/*
 if(dupli[0] != undefined){
  alert(`${dupli[0]} task already exists`)
  
  }

  dupli.length = 0;

*/
 //console.log(todosTitle)



  return(
    <>
    <ul>
      {/*Here is the problem, I am using todo. title instead of todo*/}
      {todos.map((todo => (
        
      <Task  key={todo.id} todo={todo} 
      onChange={onChangeTodo}
      onDelete={onDeleteTodo}
      
     
      />)
         
        ))}
  </ul>
 </>
)
}

function AddTodo ({ onAddTodo, todos }) {
 
  const [title, setTitle] = useState('');
  
   console.log('title of third todo inside add Todos',todos[2].title)
   console.log('todos length',todos.length)
   
   /*
   let todosTitle =[]
   function duplicateAlert(todos){
   for (let i = 0; i < todos.length; i++){
    console.log(todos[i].title)

    todosTitle.push(todos[i].title)

    let dupli = todosTitle.filter((value, index) => 
      todosTitle.indexOf(value) !== index && todosTitle.lastIndexOf(value) === index);
  
  console.log(dupli);
if (dupli.length !=0){
    alert(`${dupli[0]} task already exists`)
  }

  }
}

  duplicateAlert(todos)
  console.log(todosTitle)
  */
  //id of todos
//const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0;

 

  

 
  return (
    <>
      
     <input
        placeholder="Add task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
       <button onClick={() => {

        setTitle('');
        onAddTodo(title);
      }}>Add</button>

       
    </>

  )
}
 

function Task ( { todo , onDelete, onChange }) {
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
  
  onChange({
    ...todo,
    title: e.target.value
  });
 
}

function checkTheBox(e) {
 
  setIsChecked(!isChecked);
}

function strikeThrough (e){
  setTodoCheck(e.target.checked)
}

console.log('todo id inside Taks', todo.id)

let saveContent  = 
 <>
   
<label>
      <input
      placeholder="Add task"
     // value={input}
      checked={false} 
      onChange={(e) => {
        handleChangeLocal(e);
        checkTheBox(e);
      }}
    />
     {/*<span style={{textDecoration: crossDeciderLocal}}>{input}</span> */}
      </label> 
    <div id="buttonsAddEdit">
     
      <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
      </>   
//Edit is correct save is not
let editContent   =   
 <>   
<label>
      <input
      type="checkbox"
      value={(todo.title==undefined?null:todo.title)}
      onChange={(e) => {
        handleChangeLocal(e);
        strikeThrough(e);
      }}
    />
   
      <span style={{textDecoration: crossDeciderLocal}}>{todo.title}</span>
      </label> 
    <div id="buttonsAddEdit">
        {/*Here you don't have a todo*/}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
       
      </>




return isEditing ? saveContent : editContent;

    
}

const initialTodos = [{id:0, title:'task 1'}, 
  { id:1,
   title:'task 2'},
 
 { id:2,
   title:'task 3'}
 ];
 

let nextId = 3;
function App() {
  const [todos, setTodos] = useState(initialTodos);
  
 
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }
  function handleDeleteTodo(todoId) {
    console.log('delete me', todoId);
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }
  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  return (
    <>
     
     
        
    <div id="all-checkboxes">
      <TaskList  todos= {todos}
      onChangeTodo={handleChangeTodo}
      onDeleteTodo={handleDeleteTodo}
      />
      
     <AddTodo 
      onAddTodo={handleAddTodo}
      todos = {todos}
     />

        </div>      
      
     

       
     
      
    </>
  )
}

export default App


