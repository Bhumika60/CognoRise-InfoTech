let inputBox = document.querySelector('#input-box'); 
let btns = document.querySelectorAll('.btn');

let buttonInArray = Array.from(btns);
buttonInArray.forEach(btn=>{
    btn.addEventListener('click', (e) => {
                let btntarget = e.target.innerText;
        
                if (btntarget == 'x') {
                    btntarget = '*';
                }
                if (btntarget == '÷') {
                    btntarget = '/';
                }
        
                inputBox.value += btntarget; 
            });
})


function clearInput() {
    inputBox.value = ''; 
}
document.getElementById('ac').addEventListener('click', clearInput);

function sin() {
    inputBox.value = Math.sin(parseFloat(inputBox.value)); 
}

function cos() {
    inputBox.value = Math.cos(parseFloat(inputBox.value)); 
}

function tan() {
    inputBox.value = Math.tan(parseFloat(inputBox.value)); 
}

function pow() {
    inputBox.value = Math.pow(parseFloat(inputBox.value), 2); 
}

function sqrt() {
    inputBox.value = Math.sqrt(parseFloat(inputBox.value)); 
}

function log() {
    inputBox.value = Math.log(parseFloat(inputBox.value)); 
}

function pi() {
    inputBox.value = Math.PI; 
}

function e() {
    inputBox.value = Math.E; 
}

function fact() {
    let num = parseFloat(inputBox.value); 
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i; 
    }
    inputBox.value = fac; 
}

function inputDelete() {
    inputBox.value = inputBox.value.slice(0, -1); 
}
