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
  //? Eger ilk olarak  0 girilmisse geri don
  if (!currOperand && num === '0') return;

  //? Eğer şu anki sayi . ise ve önceki girilen sayi . iceriyorsa geri don
  if (num === '.' && currOperand.includes('.')) return;

  //? Girilen sayilari birlestir.
  currOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currOperand;
};
