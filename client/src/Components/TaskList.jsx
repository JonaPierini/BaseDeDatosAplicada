import React, { useState, useEffect } from "react";

export const TaskList = () => {
  const [taskInput, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const onChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onDeleteClick = async (id) => {
    const resultado = await fetch(`http://localhost:4000/deleteTasks/${id}`, {method:'DELETE'})
    if(!resultado.ok){
      console.log('fallo')
      return
    } 
    setTasks(tasks.filter((elem)=> elem.id !== id))
  }

  const onSubmitData = async (e) => {
    e.preventDefault()
    const resultado = await fetch(`http://localhost:4000/addTasks`, {method:'POST', body:JSON.stringify({task:taskInput})})
    if(!resultado.ok){
      console.log('fallo')
      return
    } 
    const data = await resultado.json();
    setTasks([...tasks, {name: taskInput, id: data.id}])
  }

  useEffect(() => {
    fetch('http://localhost:4000/tasks')
    .then(response => response.json())
    .then(data => setTasks(data));
  }, [ ])
  
 
  return (
    <div>
      <h3>TaskList</h3>
      <div className="ui input">
        <input placeholder="your task" value={taskInput} onChange={onChange}></input>
        <button className="ui primary button basic" onClick={onSubmitData}>Submit</button>
      </div>
      <hr></hr>
    { tasks.map((elem) => (
      <div key={elem.id} className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">{elem.name}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Done</div>
              <div className="ui basic red button" onClick={()=> onDeleteClick(elem.id)}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    )) }
    </div>
  );
};
