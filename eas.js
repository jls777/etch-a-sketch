const container = document.querySelector('.container');

const squareContDiv = document.createElement('div');

function addContainter(num = 16) {
  let cloneCont = squareContDiv.cloneNode(true);
  for (i = 0; i < num; i += 1) {
    cloneContDiv = squareContDiv.cloneNode(true);
    container.append(cloneContDiv);
  }
}
addContainter(); //to add containers for squares
squareContDiv.classList.add('sqr-cont') //class for square containers




// const squareDiv1 = document.createElement('div');
// container.append(squareDiv1);
// squareDiv1.classList.add('column');
// const columnDiv = document.querySelector('.column');

// const squareDiv2 = document.createElement('div');
// squareDiv2.classList.add('column');
// columnDiv.append(squareDiv2);