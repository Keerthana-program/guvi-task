document.addEventListener("DOMContentLoaded", function() {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
  
    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");
    const typeSelect = document.getElementById("type");
    const dateInput =document.getElementById("target-date");
    const entryList = document.getElementById("entry-list");
    const totalIncomeDisplay = document.getElementById("total-income");
    const totalExpensesDisplay = document.getElementById("total-expenses");
    const netBalanceDisplay = document.getElementById("net-balance");
  
    function updateTotals() {
      let totalIncome = 0;
      let totalExpenses = 0;
      
      entries.forEach(entry => {
        if (entry.type === "income") {
          totalIncome += entry.amount;
        } else {
          totalExpenses += entry.amount;
        }
      });
  
      totalIncomeDisplay.textContent = totalIncome.toFixed(2);
      totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
      netBalanceDisplay.textContent = (totalIncome - totalExpenses).toFixed(2);
    }
  
    function displayEntries(filter = "all") {
      entryList.innerHTML = "";
  
      const filteredEntries = entries.filter(entry => 
        filter === "all" || entry.type === filter
      );
  
      filteredEntries.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add(entry.type);
        listItem.innerHTML = `
          ${entry.description}: ${entry.type === "income" ? "+" : "-"}${entry.amount.toFixed(2)}
          (${entry.date ? entry.date : "NO Date"})
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        `;

        listItem.querySelector(".edit-button").addEventListener("click", () => editEntry(index));
        listItem.querySelector(".delete-button").addEventListener("click", () => deleteEntry(index));

        entryList.appendChild(listItem);
      });
    }
  
    function addEntry() {
      const description = descriptionInput.value.trim();
      const amount = parseFloat(amountInput.value);
      const type = typeSelect.value;
      const date = dateInput.value;
  
      if (!description || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
      }
  
      entries.push({ description, amount, type,date });
      localStorage.setItem("entries", JSON.stringify(entries));
  
      descriptionInput.value = "";
      amountInput.value = "";
      dateInput.value = "";
      displayEntries();
      updateTotals();
    }
  
    function editEntry(index) {
      const entry = entries[index];
      descriptionInput.value = entry.description;
      amountInput.value = entry.amount;
      typeSelect.value = entry.type;
      dateInput.value = entry.date;
      
      deleteEntry(index);
    }
  
    function deleteEntry(index) {
      entries.splice(index, 1);
      localStorage.setItem("entries", JSON.stringify(entries));
      displayEntries();
      updateTotals();
    }
  
    document.getElementById("add-button").addEventListener("click", addEntry);
    document.getElementById("reset-button").addEventListener("click", function() {
      descriptionInput.value = "";
      amountInput.value = "";
      dateInput.value = "";
    });
  
    document.querySelectorAll('input[name="filter"]').forEach(radio => {
      radio.addEventListener("change", function() {
        displayEntries(this.value);
      });
    });
  
    displayEntries();
    updateTotals();
  });
