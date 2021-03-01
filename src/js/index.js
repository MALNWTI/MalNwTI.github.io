const anchors = document.querySelectorAll('a[href*="#"]');
    
window.addEventListener('DOMContentLoaded', function() {
    activeMenuLoad();
    burger();
})
window.addEventListener('load', function() {
    
})
window.addEventListener('resize', function() {
    
})

function activeMenuLoad() {

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
        changeActive(blockID);
        closeMenu();
        })
    }
}

function closeMenu() {
    const burger = document.getElementById("IBurger");
    const menu = document.getElementById("menu");
    const Wburger = document.getElementById('WBurger');

    burger.className = 'burgerA';
    menu.className = 'menu';   
    Wburger.className = 'wrapBurger wrapBurgerA'
}

function changeActive(currentLi) {
    for (let anchor of anchors) {
        if (anchor.getAttribute('href').substr(1) == currentLi) {
            anchor.classList.add("active");
        }
        else{
            anchor.classList.remove("active");
        }
    }
}

function burger() {
    const burger = document.getElementById("IBurger");
    const menu = document.getElementById("menu");
    const Wburger = document.getElementById('WBurger');
    if ( burger.className == 'burgerA' ) {
        burger.className = 'burgerD';
        menu.className = "menuA";
        Wburger.className = 'wrapBurger wrapBurgerF'
    }
    else {
        burger.className = 'burgerA';
        menu.className = 'menu';   
        Wburger.className = 'wrapBurger wrapBurgerA'
    }
}