// Food.js
import React, { useState } from 'react';
import './Food.css';

const Food = () => {
  const [rewardWon, setRewardWon] = useState(false);
  const [foodTasks, setFoodTasks] = useState([
    { id: 1, location: 'Source', task: 'Collect Food', completed: false },
    { id: 3, location: 'Source', task: 'Collect Food', completed: false },
    { id: 4, location: 'Destination', task: 'Distribute Food', completed: false },
  ]);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = foodTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setFoodTasks(updatedTasks);
    checkAllTasksCompleted(updatedTasks);
  };

  const checkAllTasksCompleted = (tasks) => {
    const allCompleted = tasks.every((task) => task.completed);
    if (allCompleted) {
      setRewardWon(true);
    }
  };

  return (
    <div className="food-container">
      <div className="food-card">
        <h2 className="food-title">Food Collection & Distribution</h2>
        <div className="food-timeline">
          {foodTasks.map((task) => (
            <div
              key={task.id}
              className={`food-task ${task.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <p className={`${task.location === 'Source' ? 'source' : 'destination'} ${task.completed ? 'checked' : ''}`}>
                {task.location} - {task.task}
              </p>
            </div>
          ))}
        </div>
        {rewardWon && <p className="reward-message">You have won a Reward!</p>}
      </div>
    </div>
  );
};

export default Food;
