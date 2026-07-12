import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child from "./components/Child.jsx"

// Funtion Component
// a javascript function that returns JSX
function App() {
// React Hooks are function that let you react feature( such as state,context) inside functional components.

// useState
// used to store state in component
  const [count,setCount] =useState(0)

  const [image,setImage] =useState(null)

  const imageRef = useRef()

  useEffect(() => {
    console.log(count)
  })

  function increaseCount() {
    setCount(count+1)
  }

  function handleChange(e) {
    const imgURL = URL.createObjectURL(e.target.files[0]);
      setImage(imgURL);
  }

  function removeImage() {
     setImage(null);

    imageRef.current.value = "";
  }

  function Parent() {

  }


  return (
    <>
    {/* <p>Hello</p>
    <p>Hello World</p>
    <p>Count: {count}</p>
    <button onClick={increaseCount}>Increase</button>
    <Todo/>
    <Greet name="Arman"/>
    <Greet name="Farhan"/>
    <input type="file" accept="image/*" ref ={imageRef} onChange = {handleChange}/>

    <button onClick = {removeImage}>Remove Image</button>
    <div>
      {image && (<img src={image} alt="Preview" style={{ width: "200px" }} />)}
    </div>
    <Child/> */}
    <h1> This is a parent component</h1>
    <Child nane={name}/>
    
    </>
  )
}

export default App


function Todo() {
  return (
    <div>
      <p>Todo</p>
    </div>
  )
}

function Greet(props) {
  return (
    <p>Good Morning {props.name}</p>
  )
}

// React.memo prevents a component from re-rendering when its props have not changed
// Use When
// A child component receives props
// The parent re-renders frequently.
// The child does not need to update if props are unchanged
 
// use memo remembers the result of an expensive calculation
// Use When
