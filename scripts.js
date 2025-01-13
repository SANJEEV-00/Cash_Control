document.getElementById('expense-form').addEventListener('submit', addExpense);

let totalAmount = 0;

function addExpense(event) {
    event.preventDefault();

    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description && amount && amount > 0) {
        const expenseList = document.getElementById('expense-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${description}: $${amount.toFixed(2)}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            expenseList.removeChild(listItem);
            totalAmount -= amount;
            updateTotalAmount();
        });

        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);

        totalAmount += amount;
        updateTotalAmount();

        document.getElementById('expense-description').value = '';
        document.getElementById('expense-amount').value = '';
    }
}

function updateTotalAmount() {
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}
