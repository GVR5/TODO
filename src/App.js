import React from 'react';
import './App.css';
import Heading from './Component/Header/Heading'
import Tasks from './Component/Taskbar/Tasks'
import ListIt from './Component/TaskList/ListIt'
import './Component/style.css'


function App() {
  return (
    <div className="App">
      <Heading />
      <Tasks />
      <ListIt />

    </div>
  );
}

export default App;
