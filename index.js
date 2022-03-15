import { getId, getAdvice } from './functions.js'
const action = document.querySelector('.dice-container');
let idHtml = document.querySelector('.id_advice')
let adviceHtml = document.querySelector('.advice')





action.addEventListener('click', async() => {
    let dataAdvice = await fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json()

    })

    getId(dataAdvice.slip.id, idHtml)
    getAdvice(dataAdvice.slip.advice, adviceHtml)

})