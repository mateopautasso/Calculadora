let resAnterior = document.querySelector(".resultadoAnterior")
let resActual = document.querySelector(".resultadoActual")
const buttons = document.querySelectorAll("button")
const clear = document.querySelector(".clear")
const btnPorcentaje = document.querySelector('.porcentaje')
const operadores = document.querySelectorAll('.operador')
const numeros = document.querySelectorAll(".number");
const coma = document.querySelector(".coma")
const neg = document.querySelector(".neg")
const igual = document.querySelector(".igual")

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

let operacion;
let resAnteriorRepeat = []

function Igual() {
    igual.classList.add('btnOrangePresionado')
    setTimeout(()=>{
        igual.classList.remove('btnOrangePresionado')
    },200)

    if(resAnterior.innerHTML !== '') {
        resAnteriorRepeat.push(resActual.innerHTML)
        if (resActual.innerHTML === '0') {
            resActual.innerHTML = resAnteriorRepeat[0];
        } 
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
    } else if(operacion === undefined && resAnterior.innerHTML === ''){
        resAnterior.innerHTML = resActual.innerHTML;
        resActual.innerHTML = '0'
    }else if(operacion === undefined && resAnterior.innerHTML !== '') {
        resAnterior.innerHTML = resAnterior.innerHTML;
        resActual.innerHTML = '0'
    }

    operacion = operacion;
}

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        for(operador of operadores) {
            operador.classList.remove('operadorPresionado')
        }
        btnPorcentaje.classList.remove('porcentajePresionado')
    })
})


numeros.forEach((numero)=>{
    numero.addEventListener('click', (e)=>{

        let numberPresionado = e.target;
        for(operador of operadores) {
            operador.classList.remove('operadorPresionado')
        }
        btnPorcentaje.classList.remove('porcentajePresionado')
        
        numberPresionado.classList.add('btnGreyPresionado')
        setTimeout(()=>{
            numberPresionado.classList.remove('btnGreyPresionado')
        },200)


        if(resAnterior !== '' && operacion === undefined) {
            resAnterior.innerHTML = '';
        } else {
            resAnterior.innerHTML = resAnterior.innerHTML;
        }

        if(resActual.innerHTML == '0') {
            resActual.innerHTML = `${numero.innerHTML}`
        } else if(resActual.innerHTML == '0.') {
            resActual.innerHTML = `0.${numero.innerHTML}`
        } else {
            resActual.innerHTML = resActual.innerHTML + `${numero.innerHTML}`
        }

        if(resAnterior.innerHTML !== '' ) {
            resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
        }
    })
})

operadores.forEach((operador)=>{
    operador.addEventListener('click', (e)=>{
        let operadorPresionado = e.target;

        for(operador of operadores) {
            operador.classList.remove('operadorPresionado')
        }
        
        if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
            resAnterior.innerHTML = resAnterior.innerHTML
        } 
            else if(resAnterior.innerHTML === '' && resActual.innerHTML !== '0') {
            resAnterior.innerHTML = resActual.innerHTML;
            resActual.innerHTML = '0';
        } 
            else if(resAnterior.innerHTML !== '' && resActual.innerHTML !== '0'){
            resAnterior.innerHTML = resAnterior.innerHTML;
            resActual.innerHTML = resActual.innerHTML
        }


        if(operadorPresionado.innerHTML === '%') {
            operadorPresionado.classList.add('porcentajePresionado')
        } else {
            operadorPresionado.classList.add('operadorPresionado')
        }

        if(operadorPresionado.innerHTML === '+') {
            if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
                resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
                console.log(resAnteriorRepeat)
                operacion = '+';
            } else {
                Igual()
                operacion = '+';
            }
        } else if (operadorPresionado.innerHTML === '-') {
            if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
                resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
                console.log(resAnteriorRepeat)
                operacion = '-';
            } else {
                Igual()
                operacion = '-';
            }
        } else if (operadorPresionado.innerHTML === 'x') {
            if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
                resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
                console.log(resAnteriorRepeat)
                operacion = 'x';
            } else {
                Igual()
                operacion = 'x';
            }

        } else if(operadorPresionado.innerHTML === '÷') {
            if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
                resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
                console.log(resAnteriorRepeat)
                operacion = '÷';
            } else {
                Igual()
                operacion = '÷';
            }
        } else if(operadorPresionado.innerHTML === '%') {
            if(resAnterior.innerHTML !== '' && resActual.innerHTML === '0') {
                resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
                console.log(resAnteriorRepeat)
                operacion = '%';
            } else {
                Igual()
                operacion = '%';
            }
        } else if(operadorPresionado.innerHTML === '+/-') {
            operacion = '+/-';
        }
    })
})


neg.addEventListener ('click', ()=>{
    neg.classList.add('btnSoftGreyPresionado')
    setTimeout(()=>{
        neg.classList.remove('btnSoftGreyPresionado')
    },200)
    let num = parseFloat(resActual.innerHTML)
    let numneg = num - (num*2)
    resActual.innerHTML = numneg
})

clear.addEventListener('click', ()=>{
    clear.classList.add('btnSoftGreyPresionado')
    setTimeout(()=>{
        clear.classList.remove('btnSoftGreyPresionado')
    },200)
    resActual.innerHTML = '0'
    resAnterior.innerHTML = ''
    operacion = undefined;
    resAnteriorRepeat.splice(0, resAnteriorRepeat.length)
})

coma.addEventListener('click', ()=>{
    for(operador of operadores) {
        operador.classList.remove('operadorPresionado')
    }
    btnPorcentaje.classList.remove('porcentajePresionado')
    
    coma.classList.add('btnGreyPresionado')
    setTimeout(()=>{
        coma.classList.remove('numberPresionado')
    },200)
    let arrayRes = resActual.innerHTML.split('');
    let validacion = arrayRes.find((element)=>element == ',')
    if(validacion == undefined) {
        resActual.innerHTML = resActual.innerHTML + '.'
    } else {
        resActual.innerHTML = resActual.innerHTML
    }
})

igual.addEventListener('click', Igual)  


