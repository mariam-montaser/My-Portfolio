// strict mode
'use strict';
// select DOM items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBrand = document.querySelector('.brand')
const menuItems = document.querySelector('.items')
const menuItem  = document.querySelectorAll('.item')

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuItems.classList.add('show');
        menuItem.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuItems.classList.remove('show');
        menuItem.forEach(item => item.classList.remove('show'));
        
        // set menu state
        showMenu = false;

    }
    
}