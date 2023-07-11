import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //console.log(props)
  const [newTaskName, setNewTaskName] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};
