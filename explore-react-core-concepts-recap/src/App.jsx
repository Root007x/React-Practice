import { useState } from 'react'
import Posts from './Posts'
import './App.css'

function App() {
  return (
    <>
      <h1>React core Concepts</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>

        <Posts></Posts>
      </ol>
    </>
  )
}

export default App
