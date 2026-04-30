window.alert('ola, seja bem vindo ao meu portfolio!')

const btnDark = document.querySelector('.dark')
btnDark.addEventListener('click' , (e) => {
     document.body.style.backgroundColor = 'rgb(77,77,77)'
})

const btnLight = document.querySelector('.light')
btnLight.addEventListener('click' , (e) => {
    document.body.style.backgroundColor = 'rgb(241, 235, 220)'
})
