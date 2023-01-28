let resAnterior = document.querySelector(".resultadoAnterior")
let resActual = document.querySelector(".resultadoActual")
const clear = document.querySelector(".clear")
const operadores = document.querySelectorAll('.operador')
const numeros = document.querySelectorAll(".number");
const coma = document.querySelector(".coma")
const neg = document.querySelector(".neg")
const igual = document.querySelector(".igual")

numeros.forEach((numero)=>{
    numero.addEventListener('click', ()=>{
        if(resActual.innerHTML == '0') {
            resActual.innerHTML = `${numero.innerHTML}`
        } else if(resActual.innerHTML == '0.') {
            resActual.innerHTML = `0.${numero.innerHTML}`
        }
        else {
            resActual.innerHTML = resActual.innerHTML + `${numero.innerHTML}`
        }
    })
})

let operacion;
operadores.forEach((operador)=>{
    operador.addEventListener('click', ()=>{

        if(resAnterior.innerHTML === '') {
            resAnterior.innerHTML = resActual.innerHTML;
            resActual.innerHTML = '0';
        } else if(resAnterior.innerHTML !== ''){
            resAnterior.innerHTML = resAnterior.innerHTML;
        }

        if(operador.innerHTML === '+') {
            operacion = '+';
        } else if (operador.innerHTML === '-') {
            operacion = '-';
        } else if (operador.innerHTML === 'x') {
            operacion = 'x';
        } else if(operador.innerHTML === '÷') {
            operacion = '÷';
        } else if(operador.innerHTML === '%') {
            operacion = '%';
        } else if(operador.innerHTML === '+/-') {
            operacion = '+/-';
        }
    })
})

function suma() {
    let num1 = parseFloat(resAnterior.innerHTML);
    let num2 = parseFloat(resActual.innerHTML)
    resAnterior.innerHTML = num1 + num2;
    resActual.innerHTML = '0'
}
function resta() {
    let num1 = parseFloat(resAnterior.innerHTML);
    let num2 = parseFloat(resActual.innerHTML)
    resAnterior.innerHTML = num1 - num2;
    resActual.innerHTML = '0'
}
function multiplicacion() {
    let num1 = parseFloat(resAnterior.innerHTML);
    let num2 = parseFloat(resActual.innerHTML)
    resAnterior.innerHTML = num1 * num2;
    resActual.innerHTML = '0'
}
function division() {
    let num1 = parseFloat(resAnterior.innerHTML);
    let num2 = parseFloat(resActual.innerHTML)
    resAnterior.innerHTML = num1 / num2;
    resActual.innerHTML = '0'
}
function porcentaje() {
    let num1 = parseFloat(resAnterior.innerHTML);
    let num2 = parseFloat(resActual.innerHTML)
    resAnterior.innerHTML = (num1 * num2) / 100;
    resActual.innerHTML = '0'
}

neg.addEventListener ('click', ()=>{
    let num = parseFloat(resActual.innerHTML)
    let numneg = num - (num*2)
    resActual.innerHTML = numneg
})

igual.addEventListener('click', ()=>{
    if(resActual.innerHTML === '0') {
        resAnterior.innerHTML = resAnterior.innerHTML;
    }
    if(operacion === '+') {
        suma();
    } else if(operacion === '-') {
        resta()
    } else if(operacion === 'x') {
        multiplicacion()
    } else if(operacion === '÷') {
        division()
    } else if(operacion === '%') {
        porcentaje()
    }
    operacion = '';
})  

clear.addEventListener('click', ()=>{
    resActual.innerHTML = '0'
    resAnterior.innerHTML = ''
})

coma.addEventListener('click', ()=>{
    let arrayRes = resActual.innerHTML.split('');
    let validacion = arrayRes.find((element)=>element == ',')
    if(validacion == undefined) {
        resActual.innerHTML = resActual.innerHTML + '.'
    } else {
        resActual.innerHTML = resActual.innerHTML
    }
})

