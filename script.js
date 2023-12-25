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
    color.value = '#000000'
    gridSize.value = 0;
    grid.replaceChildren()
})

// color.addEventListener('mouseout', ()=> {
//     myColor = color.value;
// })

//random function
let randomColor  = () => {
    return color.value.slice(1)
};;

//function for making grids
//event listener for all divs on grid
gridSize.addEventListener('keyup', (e) => {
    grid.replaceChildren()
    let x;
    let myDiv;
    if (e.target.value > 100 || e.target.value < 0 ) {
        alert('Please select a value from 1 to 100')
    } else {
        for(let i= 0; i < e.target.value ** 2 ; i++) {
            x = document.createElement('div')
            x.classList.value = 'child'
            x.style.cssText = `width: ${500/e.target.value}px; height: ${500/e.target.value}px;`;
            grid.appendChild(x)
        }
    }
    myDiv = document.querySelectorAll('.child')
    myDiv.forEach((y)=> {
        y.style.cssText = `width: ${500/e.target.value}px; height: ${500/e.target.value}px;`
        y.addEventListener('mouseover', (e)=> {
            e.target.style.cssText += `background-color: #${randomColor()};`
    })
    myDiv
} )

})
//event to change color on mouse over


//event for toggle mode
toggle.addEventListener('click', (e) => {
    if (currentToggle.textContent.toLowerCase() == 'color mode') {
        currentToggle.textContent = 'Rainbow Mode'
        randomColor= () => {
            return Math.floor((Math.random() *16777215 )).toString(16);
        }
    } else if (currentToggle.textContent.toLowerCase() == 'rainbow mode') {
        currentToggle.textContent = 'Color Mode'
        randomColor = () => {
            return color.value.slice(1)
        };
    }
})

//defaults for everything