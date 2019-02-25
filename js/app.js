document.addEventListener('DOMContentLoaded', () => {
  const addItemToList = document.querySelector('#new-form');
  addItemToList.addEventListener('submit', formSubmit);

  const deleteListButton = document.querySelector('#delete-button');
  deleteListButton.addEventListener('click', deleteButtonClicked);
});

const formSubmit = function (event) {
  event.preventDefault();

  const listItem = createListItem(event.target);
  const list = document.querySelector('#list');
  list.appendChild(listItem);

  event.target.reset();
};

const createListItem = function (form) {
  const newLi = document.createElement('li');

  const x = form.x.value;
  const y = form.y.value;

  newLi.textContent = `x = ${x} and y = ${y}`;

  return newLi;
};

const deleteButtonClicked = function (event) {
  const list = document.querySelector('#list');
  list.innerHTML = '';
};
