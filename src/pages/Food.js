/* Food.css */
.food-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    font-weight: bolder;
  }
  
  .food-card {
    background-color: #feece2;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 60%;
  }
  
  .food-title {
    color: #ffbe98;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
  
  .food-timeline {
    display: flex;
    flex-direction: column;
  }
  
  .food-task {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .food-task.completed {
    color: #e2bfb3;
    font-size: 35px;
  }
  
  .food-task input[type='checkbox'] {
    margin-right: 10px;
    /* Change tick color */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border: 2px solid #000;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
  
  .food-task input[type='checkbox']:checked {
    background-color: #ffbe98; /* Yellow for source */
  }
  
  .food-task input[type='checkbox']:checked + p {
    color: #ffbe98;
  }
  
  .source {
    color: black;
    font-size: large;
  }
  
  .destination {
    color: black;
    font-size: large;
  }
  
  .source.checked {
    color: orange;
  }
  
  /* Apply green color to destination when checked */
  .food-task .destination.checked {
    color: green !important; /* Use !important to ensure precedence */
  }
  
  .reward-message {
    text-align: center;
    margin-top: 20px;
    color: #000; /* Black */
    font-weight: bold;
    font-size: 2.4rem;
    animation: rewardMessageAnimation 2s ease-in-out forwards;
  }
  
  @keyframes rewardMessageAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  /* Food.css */
.food-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bolder;
}

.food-image {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 200px; /* Adjust the width as needed */
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.food-card {
  background-color: #feece2;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 60%;
}

/* Remaining CSS styles remain the same */
