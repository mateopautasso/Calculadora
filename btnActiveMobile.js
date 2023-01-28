const btn = document.querySelectorAll("button");

btn.forEach((boton)=>{
    boton.addEventListener('touchstart',()=>{
        boton.classList.add('active')
    })
    boton.addEventListener('touchend',()=>{
        boton.classList.remove('active')
    })
})