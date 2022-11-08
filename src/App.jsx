import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Buy tomatoes",
      id: 1,
    },
    { name: "Feed the rabbit", id: 2 },
    { name: "Clean up", id: 3 },
    { name: "Go out", id: 4 },
  ]);

  function deleteTask(id) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  function addTask(task) {
    const newTask = { id: Date.now(), name: task };
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  return (
    <div className="App">
      <section>
        <Form addTask={addTask} />
      </section>
      <section>
        <h2>To-do list</h2>
        <List tasks={tasks} deleteTask={deleteTask} />
      </section>
    </div>
  );
}

export default App;
