import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add, edit } from "../store/taskSlice";

function AddUpdateTask(props) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.task) setTitle(props.task.title);
  }, [props]);

  const save = () => {
    if (props.task) {
      const payload = {
        id: props.task.id,
        title: title,
      };
      dispatch(edit(payload));
    } else {
      const payload = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: title,
      };
      dispatch(add(payload));
    }
    props.cancel();
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="form-container">
        <h3>Add/update task</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Task</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="btn-container">
            <button onClick={save}>Save</button>
            <button onClick={props.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUpdateTask;
