const burger_menu = document.querySelector('#hamburger_menu')
const burger = document.querySelector('#hamburger')

burger.state = false

burger.addEventListener('click', () => {
    burger.state = !burger.state
    if (burger.state)
        burger_menu.classList.remove('d-none')
    else
        burger_menu.classList.add('d-none')

})