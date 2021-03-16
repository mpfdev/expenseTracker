//General constructor to create your Expense
class Expense {
  constructor(name, date, amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
  }
}

//Object to handle UI
class UI {
  static displayItems() {
    const storedItem = [];

    const items = storedItem;

    items.forEach((item) => UI.addItemToList(item));
  }

  static addItemToList(item) {
    const list = document.querySelector('#expenseList');
    let row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.date}</td>
      <td>${item.amount}</td>
      <td><a href="#" id="delete" class="btn btn-danger btn-sm">X</a></td>
    `;

    list.appendChild(row);
  }

  static clearValues() {
    document.querySelector('#expenseName').value = '';
    document.querySelector('#expenseDate').value = '';
    document.querySelector('#expenseAmount').value = '';
  }

  static removeExpense(event) {
    event.parentElement.parentElement.remove();
  }
}

// Gather Values && Create a new Expense Item
document.addEventListener('load', UI.displayItems());

document.querySelector('#addExpense').addEventListener('click', (e) => {
  e.preventDefault();

  function addItem() {
    const name = document.querySelector('#expenseName').value;
    const date = document.querySelector('#expenseDate').value;
    const amount = document.querySelector('#expenseAmount').value;

    return new Expense(name, date, amount);
  }

  const newExpense = addItem();

  UI.addItemToList(newExpense);
  UI.clearValues();
});

// Remove Element
document.querySelector('#expenseList').addEventListener('click', (event) => {
  UI.removeExpense(event.target);
});
