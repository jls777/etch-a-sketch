let container = document.querySelector('.container');
let bodyContainer = document.querySelector('.body-container');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
//-----------------------------------------
const squareContDiv = document.createElement('div');
const squareDiv = document.createElement('div');
const errorDiv = document.createElement('div');
squareContDiv.classList.add('sqr-cont');
squareDiv.classList.add('square');
errorDiv.classList.add('error');
// -----------function for current grid----------------
function addSquares(row = 16, column = 16) {
  for (i = 0; i < row; i += 1) {
    cloneContDiv = squareContDiv.cloneNode(true);
    squareContDiv.classList.add('sqr-cont');
    container.append(cloneContDiv);
  }
  let squareContainer = document.querySelectorAll('.sqr-cont');
  squareContainer.forEach(div => {
    for (i = 0; i < column; i += 1) {
      cloneSquares = squareDiv.cloneNode(true);
      div.append(cloneSquares);
    }
  })
}
addSquares()
//-------------------promt and clear current grid-------------------
const promptButton = document.querySelector('.prompt-button');
promptButton.addEventListener('click', e => {
  let container = document.querySelector('.container');
  
  container.remove()
  
  let row = window.prompt('enter row number'); 
  let column = window.prompt('enter column number');
  
// -------------add new grid---------------------------------------
  let newContainer = document.createElement('div');
  bodyContainer.insertBefore(newContainer, footer);
  newContainer.classList.add('container');
  
  function newAddSquares(row, column) {
    // -------error prompt--------------------
    if (isNaN(row) || isNaN(column)) {
      newContainer.append(errorDiv)
      return errorDiv.textContent = 'Error';
    }
    if (row <= 0 || column <= 0) {
      newContainer.append(errorDiv)
      return errorDiv.textContent = 'Error';
    }
    if (row > 100 || column > 100) {
      newContainer.append(errorDiv)
      return errorDiv.textContent = 'Error';
    }

    // ------------add row------------------
    for (i = 0; i < row; i += 1) {
      cloneContDiv = squareContDiv.cloneNode(true);
      squareContDiv.classList.add('sqr-cont');
      newContainer.append(cloneContDiv);
    }
    //--------------add column----------------
    let squareContainer = document.querySelectorAll('.sqr-cont');
    squareContainer.forEach(div => {
      for (i = 0; i < column; i += 1) {
        cloneSquares = squareDiv.cloneNode(true);
        div.append(cloneSquares);
      }
    })
  }
  newAddSquares(row, column);
  // ----------select square-------------------
  let square = document.querySelectorAll('.square');

  square.forEach(sqr => sqr.addEventListener('click', e => {
    e.target.classList.add('select');
    let select = document.querySelectorAll('.select');
    select.forEach(selected => selected.style.backgroundColor = 'black');
  }))
})

//--------------------------------------------
let square = document.querySelectorAll('.square');

square.forEach(sqr => sqr.addEventListener('click', e => {
  e.target.classList.add('select');
  let select = document.querySelectorAll('.select');
  select.forEach(selected => selected.style.backgroundColor = 'black');
}))

//-----------reset---------------

function resetFunction() {
  let square = document.querySelectorAll('.select');
  square.forEach(sqr =>{
    sqr.classList.remove('select');
    sqr.removeAttribute('style')
  })
}
let reset = document.querySelector('.reset');
reset.addEventListener('click', e => resetFunction())