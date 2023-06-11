document.addEventListener('click', clickIconMenu)

function clickIconMenu(e){
    const targetItem = e.target;
    if (targetItem.closest('.icon_menu')) {
        document.documentElement.classList.toggle('menu_open');
    }
}


