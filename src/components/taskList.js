import { useSelector } from "react-redux";
import Task from "./task";

function TaskList(props) {
  const tasks = useSelector((state) => state.task);
  const taskLength = tasks.length;

  const taskList = tasks.map((task) => {
    return <Task editTask={props.editTask} task={task} key={task.id} />;
  });

  return (
    <div className="task-container">
      {taskLength ? <div>{taskList}</div> : <p>No task found.</p>}
    </div>
  );
}

export default TaskList;
