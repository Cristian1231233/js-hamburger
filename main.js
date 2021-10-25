

const amburgerMenu = document.querySelector('div.hamburger-menu');
const appare = document.querySelector('.header-right > a');
const scompare = document.querySelector('.close');

appare.addEventListener('click',function(){
    console.log('hai cliccato sull hamburger');
    amburgerMenu.classList.add('active')
});

scompare.addEventListener('click',function(){
    console.log('hai cliccato sulla x');
    amburgerMenu.classList.remove('active')
});