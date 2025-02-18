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
