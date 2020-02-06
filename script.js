const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['blue','yellow','purple','red','green','pink','white']

body.style.backgroundColor ='orange'
    button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length+1)
    body.style.backgroundColor = colors[colorIndex ]
}