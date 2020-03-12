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
