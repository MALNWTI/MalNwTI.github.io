const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      
      changeActive(blockID)
      closeMenu()
    })
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
            anchor.className = 'active'
        }
        else{
            anchor.className = ''
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




// window.onload = function () {
//     const WrapC = document.getElementById('WrapperContent')
//     const WrapC = 'WrapperContent'
//     console.log(WrapC.className)
//     WrapC.className = ('"' + WrapC.className + ' ' + ' Dis' +'"')
// }


// const wrappers = document.querySelectorAll('div[class*="topWrapper"]')
// for (let wrapper of wrappers){
//     wrapper.addEventListener('mouseover', function(e){
//         e.preventDefault()
//         wrapper.children[0].className = "WrapperContent WrapFocusOn"
//         console.log('work')
//     })
//     // console.log(wrapper)
//     // console.log(wrapper.children[0])
//     //wrapper.children[0].className = "WrapperContent Disable"    
// }
