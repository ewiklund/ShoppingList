// Select an element:
const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e)  {
  // console.log(e); // KeyboardEvent {isTrusted: true, key: 'Enter', code: 'Enter', location: 0, ctrlKey: false, …}
  if (e.key === 'Enter') {
    if(!this.value) return;
    // add a new item
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
  }
});

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCondition = document.querySelector('#terms');
const veggieSelection = document.querySelector('#veggie');

const formData = {};
for(let input of [creditCardInput, termsCondition, veggieSelection]) {
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked } = target;
  
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}
