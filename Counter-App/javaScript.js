const mainTitle = document.querySelector('.title');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');

let count =0;
btnIncrement.addEventListener('click',()=>{
    count++;
    mainTitle.textContent=count;
})
btnDecrement.addEventListener('click',()=>{
    count--;
    mainTitle.textContent=count;
})
btnReset.addEventListener('click',()=>{
    count=0;
    mainTitle.textContent=count;
})