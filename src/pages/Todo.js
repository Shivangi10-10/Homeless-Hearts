// Todo.js
import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container"  style={{fontFamily: 'amatic sc'}}>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter task"
          style={{fontFamily: 'amatic sc'}}
        />
        <button type="submit"  style={{fontFamily: 'amatic sc'}}>Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)} style={{fontFamily: 'amatic sc'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
