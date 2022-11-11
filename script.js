//Declare our variables globally to be used in our functions
const container = document.getElementById('container');
const rows = document.getElementsByClassName('row');

//Function creates a grid of a given size (eg. 16 = 16x16 grid)
function createGrid(rowNum, cellNum){
    createRows(rowNum);
    createCells(cellNum);
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

let userRowPrompt = prompt("How many rows would you like in your grid?");
let userColumnPrompt = prompt("How many columns would you like in your grid?");

createGrid(userRowPrompt, userColumnPrompt);

//Declare a variable to select all the cells of our grid
let cells = document.querySelectorAll('.cell');

//Function generates a random colour and returns it
// function randomColour(){
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


//Declare variable so we can select our reset button
const resetButton = document.getElementById('reset-button');


//Event listener for our reset button which removes current rows and
//prompts for new values from user to create new grid
resetButton.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    userRowPrompt = prompt("How many rows would you like in your grid?");
    userColumnPrompt = prompt("How many columns would you like in your grid?");
    createGrid(userRowPrompt, userColumnPrompt);
    cells = document.querySelectorAll('.cell');
    cells.forEach(function(element){
        element.addEventListener('mouseover', function(){
            element.style.backgroundColor = 'black';
        })
    })
})

//Loops through our cells adding an event listener to them
cells.forEach(function(element){
    element.addEventListener('mouseover', function(){
        element.style.backgroundColor = 'black';
    })
})

