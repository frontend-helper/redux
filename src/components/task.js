import "../global.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/taskSlice";

function Task(props) {
  const { title, id } = props.task;
  const dispatch = useDispatch();
  const editTask = async (task) => {
    props.editTask(task);
  };
  const deleteTask = async (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="task">
      <span>{title}</span>
      <div className="btn-container">
        <button onClick={(e) => editTask(props.task)}>Edit</button>
        <button onClick={(e) => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
