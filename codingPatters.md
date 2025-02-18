1. Use state to add and substract 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //initial state
  const [count, setCount] = useState(0)
//function
  function addCount(){
    setCount(count + 1)
  }
  function subsCount(){
    setCount(count-1)
  }
  return (
    <>
      <div>

      <h1>Counter</h1>     
      <h2>{count}</h2>
      <button onClick={addCount}>Add 1</button>
      <button onClick={subsCount}>Substract 1</button>
       </div>        
   
    </>
  )
}

export default App



 2. Show and hide text area with text area persistent 

 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //initial state
 const [isVisible, setIsVisible] = useState(true)

 const [text, setText] = useState('hide text')
 const [prevUserText, setPevUserText] = useState("")
 
 function changeText (){

  setText(text === "show text" ? "hide text" : "show text")
 }
 //function
  function handleClick(){
    setIsVisible(!isVisible)
    console.log('change text function',changeText())
   changeText()
  }
 

  return (
    <>
      <div>

      <button onClick={handleClick}>{text}</button>
      {console.log('isVisible',isVisible)}
    
     
      {isVisible &&             
      <textarea 
      value={prevUserText}
      onChange={(e) => {
      const prevUserText = e.target.value;
 
      setPevUserText(prevUserText);
    }}
    placeholder="Type something..."
      
      ></textarea>
      
      }

       </div>        
   
    </>
  )
}

export default App
