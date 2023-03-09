import React from "react";
import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit =(e)=>{
    e.preventDefault()

    if(!text)
    {
      alert('Please add a task');
    }

    onAdd({text,day,reminder});

    setText('');
    setDate('');
    setReminder(false)
  }

  return (
    <div>
      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="">Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="">Date & Time</label>
          <input
            type="text"
            placeholder="Add Date & Time"
            value={day}
            onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <div className="form-control form-control-check">
          <label htmlFor="">Set Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
