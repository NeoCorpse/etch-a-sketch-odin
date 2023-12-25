"use strict";

const gridSize = document.querySelector('#gridSize')
const resetBtn = document.querySelector('.reset')
const toggle = document.querySelector('.toggle')
const currentToggle = document.querySelector('.mode p')
const color = document.querySelector('#colorPicker')
const grid = document.querySelector('.grid')
let myColor = color.value

//reset button
resetBtn.addEventListener('click', (e) => {

})

// color.addEventListener('mouseout', ()=> {
//     myColor = color.value;
// })

//random function
function random(value) {
    return Math.floor(Math.random() * value) + 1
}

//function for making grids
//event listener for all divs on grid
gridSize.addEventListener('keyup', (e) => {
    grid.replaceChildren()
    let x;
    let y;
    if (e.target.value > 100 || e.target.value < 0 ) {
        alert('Please select a value from 1 to 100')
    } else {
        for(let i= 0; i < e.target.value ** 2 ; i++) {
            x = document.createElement('div')
            x.classList.value = 'child'
            x.style.cssText = `width: ${500/e.target.value}px; height: ${500/e.target.value}px;`;
            grid.appendChild(x)
        }
        let myDiv = document.querySelectorAll('.child')
        myDiv.style.cssText = `width: ${500/x}px; height: ${500/x}px;`
    }

})
//event to change color on mouse over

//event for toggle mode
toggle.addEventListener('click', (e) => {
    if (currentToggle.textContent.toLowerCase() == 'color mode') {
        currentToggle.textContent = 'Rainbow Mode'
    } else if (currentToggle.textContent.toLowerCase() == 'rainbow mode') {
        currentToggle.textContent = 'Color Mode'
    }
})

//do everything 