//* =================================================
//*                     IOS CALCULATOR
//* =================================================
const prevDisp = document.querySelector('.previous-display');
const currDisp = document.querySelector('.current-display');

const btnContainer = document.querySelector('.buttons-container');

//? Butonlari tasiyan container icin event tanimlamasi
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('num')) {
    // console.log(e.target.textContent);
    appendNumber(e.target.textContent);
  }
});

const appendNumber = () => {};
