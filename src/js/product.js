// let temp = sessionStorage.getItem('login');
// if (!temp) {
//     window.location.assign("login/index.html")
// }

document.addEventListener("DOMContentLoaded", function () {
    const shopContentData = JSON.parse(localStorage.getItem("basket"));

    if (shopContentData) {
        const mainContent = document.getElementById("mainContent");

        shopContentData.forEach(prod => {

            mainContent.innerHTML +=
            `
            <div class="body">
            <div class="block1">
                <img src="${prod.image}">
            </div>
            <div class="block2">
                <p class="text4"> ${prod.title} </p>
                <p class="text5"> Color: <span> White </span> </p>
            </div>
            <div class="block3">
                <p class="text6"> ${prod.price} </p>
                <p class="text7"> USD </p>
            </div>
            <div class="block4">
                <div class="border">
                    <div> <i class="fa-solid fa-minus"></i> </div>
                    <span> ${prod.count} </span>
                    <div> <i class="fa-solid fa-plus"></i> </div>
                </div>
            </div>
            <div class="block5">
                <div>
                    <p class="text8"> ${prod.price} </p>
                    <p class="text8"> USD </p>
                </div>
                <i class="fa-regular fa-trash-can" data-id="${prod.id}"></i>
            </div>
            </div>
               
            `
        });

        mainContent.addEventListener("click", function (event) {
            if (event.target.classList.contains("fa-trash-can")) {
                const productId = event.target.getAttribute("data-id");
                const productIndex = shopContentData.findIndex(prod => prod.id == productId);

                if (productIndex !== -1) {
                    shopContentData.splice(productIndex, 1);
                    localStorage.setItem("basket", JSON.stringify(shopContentData));

                    const productItem = event.target.closest(".body");
                    mainContent.removeChild(productItem);
                }

                let productPrice = document.querySelector('.productPrice');
        
                let price = 0;
                shopContentData.forEach(prod => {
                    price += Number(prod.price) * Number(prod.count)
                })  
        
                productPrice.innerHTML = price;
            }
        });

        let productPrice = document.querySelector('.productPrice');
        
        let price = 0;
        shopContentData.forEach(prod => {
            price += Number(prod.price) * Number(prod.count)
        })  

        productPrice.innerHTML = price;
    }
});

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
