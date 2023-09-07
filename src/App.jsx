import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./VisibilityControl";
import LoginForm from "./components/formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Tareas } from "./components/Tareas";
import { SobreNosotros } from "./components/SobreNosotros";
import  Menu from './components/Menu';

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems (tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
       <LoginForm />
      <br />
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl 
      isChecked={showCompleted}
      setShowCompleted={ (checked) => setShowCompleted (checked)}
      cleanTasks={ cleanTasks }
      
      />

<BrowserRouter>
      <Menu />
      <Routes>
      <Route exact path="/" components={<Home />} />
      <Route path="/Tareas" components={<Tareas />} />
      <Route path="/SobreNosotros" componente={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>


      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )
      }
    </div>
  );
}

export default App;
