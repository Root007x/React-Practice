import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert("Button Clicked");
  }

  const handleClick2 = () =>{
    alert("Button 2 cilcked");
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concept Part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click Me 2</button>
      <button onClick={() => addToFive(5)} >Four</button>
    </>
  )
}

export default App
