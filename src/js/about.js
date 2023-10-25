// let temp = sessionStorage.getItem('login');
// if (!temp) {
//     window.location.assign("login/index.html")
// }

let gaming = document.querySelector('.gaming');
let dropdown = document.querySelector('.dropdown');
let dropdowns = document.querySelectorAll('.dropdowns');

gaming.addEventListener('mouseover', () => {
    dropdown.style.transform = 'scaleY(100%)';
});

dropdown.addEventListener('mouseover', () => {
    dropdown.style.transform = 'scaleY(100%)';
});

gaming.addEventListener('mouseout', () => {
    dropdown.style.transform = 'scaleY(0)';
});

dropdown.addEventListener('mouseout', () => {
    dropdown.style.transform = 'scaleY(0)';
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        dropdown.style.marginTop = '-12px'
    } else {
        dropdown.style.marginTop = '0'
    }
})

dropdowns.forEach(drop => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            drop.style.marginTop = '-4px'
        } else {
            drop.style.marginTop = '0'
        }
    })
})

let barMenu = document.querySelector('.barMenu');
let barMenuOpen = document.querySelector('.barMenuOpen');
let barMenuClose = document.querySelector('.barMenuClose');

barMenuOpen.addEventListener('click', () => {
    barMenu.style.right = '0'
})

barMenuClose.addEventListener('click', () => {
    barMenu.style.right = '-100%'
})

const nav = document.querySelectorAll("nav");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        nav1.classList.add("padding")
    } else {
        nav1.classList.remove("padding")
    }
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        nav2.classList.add("none")
    } else {
        nav2.classList.remove("none")
    }
})
