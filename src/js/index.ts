import '../scss/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// data
const grid : HTMLElement = document.querySelector('.grid')
const titleCell : HTMLElement = document.querySelector('.grid-title')
const startNum : Array<number> = []
for (let i = 2; i < 11; i++) {
    startNum.push(i)
}

// UI
function addNewElement(startNum : number) {
    let newCell : HTMLElement = document.createElement('div')
    newCell.className = 'grid-cell'
    let str :string = `<div class="title">${startNum}</div>`
    for (let i = 1; i < 10; i++) {
        str += `<div>${startNum} x 1 = ${startNum * i }</div>`
    }
    newCell.innerHTML = str
    grid.insertBefore(newCell, titleCell.nextSibling)
}
for (let i = 9; i > 1; i--) {
    addNewElement(i)
}