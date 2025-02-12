const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2 
let messages = [
    'seguramente te obligue a poner no',
    'Dale otra vez ahhh',
    'Una ultima',
    'ECHALE GUAPA',
    'otra vez ahhh',
    'ultima'
]

buttonNo.addEventListener('click', () => {
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor(Math.random()*messages.length)
    buttonNo.textContent= messages[indexRandom]

})

buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'
})