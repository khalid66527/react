import Counter from './count'
import './App.css'
import BetsMan from './Betsman'

function App() {
  function handleClick() {
    alert('I am a Clicked')
  }

  const handleClick3 = () =>{
    alert('click 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert (newNum)
  }


  return (
    <>
   
      <h1>Get started</h1>
      <BetsMan></BetsMan>
      <br />
      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button> <br />
      <button onClick={function handleClick2(){
        alert('Click 2')
      }}>Click Me 2</button> <br /><br />
      <button onClick={handleClick3}>click 3</button>
  
      <br /><br />
      <button onClick={() => {
        alert('clicked 4')
      }}>click 4</button>
  
      <button onClick={ () => handleAdd5(5)}>Click Add 5</button>
      
    </>
  )
}

export default App
