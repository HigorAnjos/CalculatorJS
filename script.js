const userInput = document.getElementById ('userInput');

let expression = '';

const press = num => {
  expression += num;
  userInput.value = expression;
}

const equal = () => {
  userInput.value = eval(expression);
  expression = '';
}

const erase = () => {
  expression = '';
  userInput.value = expression;
}

/* Dark Mode */
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
  document.querySelector('.calculator').classList.toggle('dark');
  document.querySelector('#userInput').classList.toggle('dark');
  document.querySelectorAll('.btn').forEach((btn) => btn.classList.toggle('dark'));
  document.querySelector('.btnEqual').classList.toggle('dark');
  
});
