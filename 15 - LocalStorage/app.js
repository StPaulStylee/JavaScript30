const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// first, check local storage and if nothing is there, create an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  // setItem, getItem, removeItem is the API
  // set item only accepts strings, so we must turn our array of objects into a
  // string using stringify
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(itemObj = [], objList) {
  objList.innerHTML = itemObj.map((item, i) => {
   return  `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
      <label for="item${i}">${item.text}</label>
    </li>
   `;
 }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input, the ! selects the input instead of label
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);



populateList(items, itemsList);
