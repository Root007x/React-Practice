import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {

  const actors = ["SRK","Salman","Shaheed"]

  return (
    <>
        <h1>Vite + React</h1>
        <Actor name = {"Bappa Raz"}></Actor>
        {
          actors.map(actor => <Actor name = {actors}></Actor>)
        }
        {/* <Todo task = "Learn React" isDone = {false}></Todo>
        <Todo task = "Try Jsx" isDone = {true}></Todo>
        <Todo task = "Explore Core concept" isDone = {false}></Todo> */}
        {/* <Device name = "laptop"></Device>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Student grade = "5th" score = '88'></Student>
        <Developer></Developer> */}
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This Device</h2>
}

function Person(){ // component
  const age = 23;
  return <h3>I am a Person. I am {age} years old</h3>
}

function Student({grade, score}){
  return (
    <div className='student'>
        <h3>This is a Student</h3>
        <p>Class : {grade}</p>
        <p>Score : {score}</p>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin : '20px',
    padding : '20px',
    border : '2px solid purple',
    borderRadius : '10px'
  }

  return (
    <div style={developerStyle}>
      <h5> Devo devo</h5>
      <p> Coding : </p>
    </div>
  )
}


export default App
