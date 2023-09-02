const container = document.querySelector('.container');

const squareContDiv = document.createElement('div');
const squareDiv = document.createElement('div');


// -----------function------------------
function addContainter(num = 16) {
  for (i = 0; i < num; i += 1) {
    cloneContDiv = squareContDiv.cloneNode(true);
    container.append(cloneContDiv);
    squareContDiv.classList.add('sqr-cont');
  }
}
addContainter(); //to add containers for squares
// ----------------------

//----------function for adding squares-----------------
const squareContainer = document.querySelectorAll('.sqr-cont');
function addSquares(num = 16) {
  squareContainer.forEach(div => {
    for (i = 0; i < num; i += 1) {
      cloneSquares = squareDiv.cloneNode(true);
      div.append(cloneSquares);
      squareDiv.classList.add('square')
    }
  })
}
addSquares();
//---------------------------------------------------

