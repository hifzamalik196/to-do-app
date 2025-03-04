let totalExpense = 0;

// Get DOM elements
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const totalExpenseDisplay = document.getElementById("total-expense");
const expenseItemsList = document.getElementById("expense-items");

// Function to add an expense
function addExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  // Create new expense item
  const li = document.createElement("li");

  li.innerHTML = `${name} - $${amount.toFixed(2)} <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>`;

  // Add new expense to the list
  expenseItemsList.appendChild(li);

  // Update total expense
  totalExpense += amount;
  totalExpenseDisplay.textContent = totalExpense.toFixed(2);

  // Clear input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
}

// Function to delete an expense
function deleteExpense(button, amount) {
  // Remove expense from the list
  const li = button.parentElement;
  li.remove();

  // Subtract the amount from the total expense
  totalExpense -= amount;
  totalExpenseDisplay.textContent = totalExpense.toFixed(2);
}
