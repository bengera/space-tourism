const hamMenu = document.querySelector('.nav-toggle');
const navUL = document.querySelector('.navigation-mobile');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navUL.classList.toggle('show');
    
    
});




