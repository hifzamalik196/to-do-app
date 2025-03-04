
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


function createTask(taskText) {
  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  li.appendChild(taskContent);

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = ""; 
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
