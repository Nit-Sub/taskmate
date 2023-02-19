import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [count , setCount]= useState(0);
  console.log(count)
  const handleAddition=()=>{
    setCount(count+1)

  }
  const handleSubstraction=()=>{
    setCount(count-1)
  }
  return (
    <>
    <div className='App'>
      <div className='box'>
    <p>{count}</p>
    <button onClick={handleAddition}>Add</button>
    <button onClick={handleSubstraction}>Sub</button>
      </div>

    </div>
    </>
  );
}

export default App;
