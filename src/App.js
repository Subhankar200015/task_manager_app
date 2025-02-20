import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
// import Tasklist from "./components/Tasklist";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
  return (
    <div className="App">
      <Navbar/>
      <div className="d-flex"><div style={{ width: "250px" }}><Sidebar addTask={addTask}/></div>
      <div style={{ flex: 1, padding: "20px" }}><Tabs /></div>
      {/* <Tasklist/> */}
      </div>
    </div>
  );
}

export default App;
