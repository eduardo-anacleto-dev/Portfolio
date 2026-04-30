/*
window.alert('ola, seja bem vindo ao meu portfolio!')


let cores = window.prompt(`Voce prefere um tema Claro ou Escuro?`)

if (cores === 'Claro'){
    document.body.style.backgroundColor = 'white'
    document.body.style.colorr = 'black'
    
} else{
    document.body.style.backgroundColor = 'rgb(231, 210, 165)'
    document.body.style.color = 'white'
}
*/

const btnDark = document.querySelector('.dark')
btnDark.addEventListener('click' , (e) => {
     document.body.style.backgroundColor = 'rgb(77,77,77)'
})

const btnLight = document.querySelector('.light')
btnLight.addEventListener('click' , (e) => {
    document.body.style.backgroundColor = 'rgb(241, 235, 220)'
})
