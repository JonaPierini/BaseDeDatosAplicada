import React, { useState } from "react";

export const TaskList = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  const onDeleteClick = () => {
    console.log('delete')
  }
  return (
    <div>
      <h3>TaskList</h3>
      <div className="ui input">
        <input placeholder="your task" value={task} onChange={onChange}></input>
        <button className="ui primary button basic">Submit</button>
      </div>
      <hr></hr>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">Friends of Vero</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Done</div>
              <div className="ui basic red button" onClick={onDeleteClick}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
