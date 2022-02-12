
const MOB_MENU_ITEM = document.querySelectorAll('.mob-side-nav');
const MOB_MENU_SECTION = document.querySelector('.mobile-nav');
const body = document.querySelector('body');

function openCloseMobTab(){
    const currentState = window.getComputedStyle(MOB_MENU_SECTION).display;
    if(currentState === 'block'){
        MOB_MENU_SECTION.style.display = 'none';
        body.style.overflowY = 'scroll';
    }
    else {
        MOB_MENU_SECTION.style.display = 'block';
        body.style.overflowY = 'hidden';
    }
}

MOB_MENU_ITEM.forEach((value) => {
    value.addEventListener('click', () => {
        openCloseMobTab()
    })
})
