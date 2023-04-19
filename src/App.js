import "./App.css";
import "./global.css";
import TaskList from "./components/taskList";
import AddUpdateTask from "./components/addUpdateTask";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [isAddUpdateTask, setAddUpdateTask] = useState(false);
  const [task, setCurrentTask] = useState("");

  const addBtn = () => {
    setCurrentTask("");
    setAddUpdateTask(true);
  };

  const cancel = () => {
    setAddUpdateTask(false);
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setAddUpdateTask(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <span className="title">Task manager</span>
          <button className="btn add-btn" onClick={addBtn}>
            Add Task
          </button>
        </header>
        <TaskList editTask={editTask} />
        {isAddUpdateTask ? <AddUpdateTask task={task} cancel={cancel} /> : ""}
      </div>
    </Provider>
  );
}

export default App;
