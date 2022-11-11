//Declare our variables globally to be used in our functions
const container = document.getElementById('container');
const rows = document.getElementsByClassName('row');

//Function creates a grid of a given size (eg. 16 = 16x16 grid)
function createGrid(gridSize){
    createRows(gridSize);
    createCells(gridSize);
}

//Creates the rows of our grid appending them to our container
function createRows(rowNumber){
    for(i = 0; i < rowNumber; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

//Creates the cells (columns) appending them to our rows
function createCells(cellNumber){
    for(j = 0; j < rows.length; j++){
        for(i = 0; i < cellNumber; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            let row = rows[j];
            row.appendChild(cell);
        }
    }
}

createGrid(100);

//Declare a variable to select all the cells of our grid
const cells = document.querySelectorAll('.cell');

//Function generates a random colour and returns it
function randomColour(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Loops through our cells adding an event listener to them
cells.forEach(function(element){
    element.addEventListener('mouseover', function(){
        element.style.backgroundColor = randomColour();
    })
})
