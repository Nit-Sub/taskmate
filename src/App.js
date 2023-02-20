import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  
  
  return (

    <>
      <div className='App'>
        <Header/>
        <TaskList />
        
      </div>
    </>
  );
}

export default App;
