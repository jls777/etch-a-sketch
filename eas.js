let container = document.querySelector('.container');
let bodyContainer = document.querySelector('.body-container');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
//-----------------------------------------
const squareContDiv = document.createElement('div');
const squareDiv = document.createElement('div');
squareContDiv.classList.add('sqr-cont');
squareDiv.classList.add('square')

// -----------function-for adding squares----------------
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
//--------------------------------------------------------
const promptButton = document.querySelector('.prompt-button');
promptButton.addEventListener('click', e => {
  let container = document.querySelector('.container');
  
  container.remove()
  
  let row = window.prompt('enter row number');
  let column = window.prompt('enter column number');

  let newContainer = document.createElement('div');
  bodyContainer.insertBefore(newContainer, footer);
  newContainer.classList.add('container');
  
  
  
  function newAddSquares(row, column) {
    for (i = 0; i < row; i += 1) {
      cloneContDiv = squareContDiv.cloneNode(true);
      squareContDiv.classList.add('sqr-cont');
      newContainer.append(cloneContDiv);
    }
    let squareContainer = document.querySelectorAll('.sqr-cont');
    squareContainer.forEach(div => {
      for (i = 0; i < column; i += 1) {
        cloneSquares = squareDiv.cloneNode(true);
        div.append(cloneSquares);
      }
    })
  }
  newAddSquares(row, column);

  
})
