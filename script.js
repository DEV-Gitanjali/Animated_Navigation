
// this method capture all the element by getlementid 
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
// when click toggle element it will be active
toggle.addEventListener('click', () => nav.classList.toggle('active'))