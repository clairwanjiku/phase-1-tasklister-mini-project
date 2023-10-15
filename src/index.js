document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      const taskDescription = document.getElementById('new-task-description').value;
  
      // Create a new list item and add it to the task list
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;
      taskList.appendChild(newTask);
  
      // Clear the input field
      document.getElementById('new-task-description').value = '';
    });
  });
});
