const btnDark = document.querySelector('.dark')
btnDark.addEventListener('click' , (e) => {
     document.body.style.backgroundColor = 'rgb(77,77,77)'
     document.body.style.color = 'rgb(241, 235, 220)'
})
const btnLight = document.querySelector('.light')
btnLight.addEventListener('click' , (e) => {
    document.body.style.backgroundColor = ''
    document.body.style.color = 'rgb(77, 77, 77)'
})

