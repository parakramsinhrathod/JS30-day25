const divs = document.querySelectorAll('div')

function longText(e){
    console.log(this.classList.value)
    console.log(this)
    /* stop bubbling */
    // e.stopPropagation()

}


divs.forEach(div => div.addEventListener('click', longText, {
    capture: false, 
    once: true
}))

let btn = document.querySelector('button')

btn.addEventListener('click', ()=> {
    console.log('click only once')
}, {
    once: true
})