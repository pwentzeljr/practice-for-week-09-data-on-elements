// Your code here
document.addEventListener('DOMContentLoaded', event => {
  const addButton = document.getElementById('add');

  const addToList = event => {
    const shoppingList = document.getElementById('shopping-list');
    const nameInput = document.getElementById('name');
    const typeInput = document.getElementById('type');

    let newLi = document.createElement('li');
    newLi.innerText = nameInput.value.trim();
    newLi.setAttribute("data-type", typeInput.value);

    shoppingList.appendChild(newLi);
    event.preventDefault();
  }

  addButton.addEventListener('click', addToList);

});
