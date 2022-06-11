//* =================================================
//*                     IOS CALCULATOR
//* =================================================
const prevDisp = document.querySelector('.previous-display');
const currDisp = document.querySelector('.current-display');

const btnContainer = document.querySelector('.buttons-container');

let currOperand = '';
let previousOperand = '';

//? Butonlari tasiyan container icin event tanimlamasi
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('num')) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }
});

const appendNumber = (num) => {
  if (num === '.' && String(currOperand).includes('.')) return;

  if (!currOperand && num === '0') return;

  currOperand = num;
};

const updateDisplay = () => {
  currDisp.textContent += currOperand;
};
