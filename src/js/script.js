let temp = sessionStorage.getItem('login');
if (!temp) {
    window.location.assign("login/index.html")
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    autoplay: false,
    centeredSlidesBounds: true,
});

const swiperLast = new Swiper(".swiperLast", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    autoplay: false,
    centeredSlidesBounds: true,
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
            drop.style.marginTop = '-6px'
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

window.addEventListener('scroll', () => {
    nav.forEach(item => {
        if (window.pageYOffset > 0) {
            item.classList.add("border")
        } else {
            item.classList.remove("border")
        }
    })
})


const slider1 = document.querySelector('.slider1')
let totalPrice = document.querySelector('.totalPrice');
let subTotal = document.getElementById('subTotal');
let basketCount = document.querySelector('.basketCount');
let basket = JSON.parse(localStorage.getItem("basket"));

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]))
    totalPrice.innerText = "0";
    basketCount.innerText = "0"
} else {
    let basket = JSON.parse(localStorage.getItem("basket"))
    basketCount.innerText = basket.length;
    let price = 0;
    basket.forEach(element => {
        price += element.price * element.count
    });
}

fetch("db.json")
    .then(res => res.json())
    .then(data => {
        data.products.forEach(product => {

            slider1.innerHTML +=
            `
            <div class="item">
                <div class="list">
                    <i class = "fa-regular fa-heart"></i>
                    <i data-id="${product.id}" data-price="${product.options[0].price}" data-image="${product.options[0].images}" data-title="${product.title}" data-type="${product.type}" data-description="${product.description}" class = "bi bi-eye showProductIcon"></i>
                    <i class = "bi bi-cart3"></i>
                </div>
                    <div class="cardTop">
                    <p class="text1"> ${product.title} </p>
                    <p class="text2"> TYPE: ${product.brand} </p>
                </div>
                <div class="img">
                <img src="${product.options[0].images}">
                </div>
                <div class="cardBottom">
                    <p class="size"> ${product.type} </p>
                    <div class="selectDiv">
                        <select id="selectList">
                            <option> ${product.options[0].color} </option>
                            <option> ${product.options[1].color} </option>
                        </select>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.svg">
                    </div>
                    <div class="cardPrice">
                        <div class="prices">
                            <div class="newPrice">
                                <p class="price"> ${product.options[0].price} </p>
                                <p class="currency"> USD </p>
                            </div>
                            <div class="oldPrice">
                                <p class="oldPriceStyle"> ${product.options[0].discountedPrice} </p>
                                <p class="oldCurrencyStyle"> ${product.currency} </p>
                            </div>
                    </div>
                    <button data-id="${product.id}" data-price="${product.options[0].price}" data-image="${product.options[0].images}" data-title="${product.title}" data-type="${product.type}" id="addBasket"> Add to Cart </button>
                </div>
            </div>
            `
        })

        let closeBasketInfo = document.querySelector('.closeBasketInfo');
        let basketIcon = document.querySelector('.basketIcon');
        let basketItemCount = document.querySelector('.basketItemCount');
        let basketProduct = document.querySelector('.basketProduct');

        closeBasketInfo.addEventListener('click', () => {
            basketProduct.style.right = '-410px'
        })

        basketIcon.addEventListener('click', () => {
            basketProduct.style.right = '0'
        })

        let addBasket = document.querySelectorAll('#addBasket');
        addBasket.forEach(btn => {
            btn.addEventListener('click', function () {
                if (localStorage.getItem("basket") === null) {
                    localStorage.setItem("basket", JSON.stringify([]))
                }
                let data_id = this.getAttribute("data-id");
                let data_price = this.getAttribute("data-price");
                let data_image = this.getAttribute("data-image");
                let data_title = this.getAttribute("data-title");
                let data_type = this.getAttribute("data-type");
                let exist = basket.find(a => a.id == data_id)
                if (exist) {
                    exist.count++
                } else {
                    basket.push({
                        id: data_id,
                        price: data_price,
                        image: data_image,
                        title: data_title,
                        type: data_type,
                        count: 1
                    })
                }

                basketCount.innerText = basket.length
                basketItemCount.innerText = basket.length
                let price = 0;
                basket.forEach(item => {
                    price += Number(item.price) * Number(item.count)
                })

                totalPrice.innerText = price;
                subTotal.innerHTML = price;
                localStorage.setItem("basket", JSON.stringify(basket))

                let basketBody = document.querySelector('.basketBody');

                basketBody.innerHTML = ""
                basket.forEach(prod => {
                    basketBody.innerHTML +=
                    `
                    <div class="product">
                        <div class="trashIcon" >
                            <i class="fa-regular fa-trash-can" data-id="${prod.id}"></i>
                        </div>
                        <div class="productImg">
                            <img src="${prod.image}">
                        </div>
                        <div class="info">
                            <p class="productTitle"> ${prod.title} </p>
                            <p class="productType"> ${prod.type} <span class="productOptions"> 32 Inches </span> </p>
                            <div class="productCount">
                                <div class="decrease" data-id="${prod.id}"> <i class="fa-solid fa-minus"></i> </div>
                                <span class="totalProductCount"> ${prod.count} </span>
                                <div class="increase"> <i class="fa-solid fa-plus"></i> </div>
                            </div>
                            <p class="productSelfPrice"> ${prod.price} <span> USD </span> </p>
                        </div>
                    </div>
                    `
                })

                let totalProductCount = document.querySelectorAll('.totalProductCount');
                let decrease = document.querySelectorAll('.decrease');
                let increase = document.querySelectorAll('.increase');

                increase.forEach((plus, index) => {
                    plus.addEventListener('click', () => {
                        totalProductCount[index].innerHTML++;
                        updateTotalPrice(index);
                    });
                });
                
                decrease.forEach((minus, index) => {
                    minus.addEventListener('click', () => {
                        if (totalProductCount[index].innerHTML > 0) {
                            totalProductCount[index].innerHTML--;
                            updateTotalPrice(index);
                            if (totalProductCount[index].innerHTML <= 0) {
                                const productId = basket[index].id;
                                const productIndex = basket.findIndex(prod => prod.id == productId);
                                if (productIndex !== -1) {
                                    basket.splice(productIndex, 1);
                                    localStorage.setItem("basket", JSON.stringify(basket));
                                    let price = 0;
                                    basketCount.innerText = basket.length;
                                    basketItemCount.innerText = basket.length;
                                    basket.forEach(prod => {
                                        price += Number(prod.price) * Number(prod.count);
                                    });
                                    totalPrice.innerText = price;
                                    subTotal.innerHTML = `Toplam: ${price} TL`;
                                    const productItem = minus.closest(".product");
                                    basketBody.removeChild(productItem);
                                }
                            }
                        }
                    });
                });
                
                function updateTotalPrice(index) {
                    const price = basket[index].price * totalProductCount[index].innerHTML;
                    subTotal.innerHTML = `Toplam: ${price} TL`;
                    updateBasketTotalPrice();
                }
                
                function updateBasketTotalPrice() {
                    let totalPrice = 0;
                    basket.forEach((prod, index) => {
                        totalPrice += prod.price * totalProductCount[index].innerHTML;
                    });
                    subTotal.innerHTML = `Toplam: ${totalPrice} TL`;
                }

                basketBody.addEventListener('click', function (event) {
                    if (event.target.classList.contains("fa-trash-can")) {
                        const productId = event.target.getAttribute("data-id");

                        const productIndex = basket.findIndex(prod => prod.id == productId);

                        if (productIndex !== -1) {
                            basket.splice(productIndex, 1);

                            localStorage.setItem("basket", JSON.stringify(basket));
                            let price = 0;
                            basketCount.innerText = basket.length;
                            basketItemCount.innerText = basket.length

                            basket.forEach(prod => {
                                price += Number(prod.price) * Number(prod.count);
                            });

                            totalPrice.innerText = price;
                            subTotal.innerHTML = price;

                            const productItem = event.target.closest(".product");
                            basketBody.removeChild(productItem);
                        }
                    }
                });
            })
        })


        let showProductIcon = document.querySelectorAll('.showProductIcon');
        let basket2 = JSON.parse(localStorage.getItem("basket2")) || [];
        let showProductWindow = document.querySelector('.showProductWindow');
        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("closeProductWindow")) {
                showProductWindow.style.display = 'none';
            }
        });

        showProductIcon.forEach(show => {
            show.addEventListener('click', function () {
                let data_id = this.getAttribute("data-id");
                let data_price = this.getAttribute("data-price");
                let data_image = this.getAttribute("data-image");
                let data_title = this.getAttribute("data-title");
                let data_type = this.getAttribute("data-type");
                let data_description = this.getAttribute("data-description");
                let exist = basket2.find(a => a.id == data_id);

                if (exist) {
                    exist.count++;
                } else {
                    basket2.push({
                        id: data_id,
                        price: data_price,
                        image: data_image,
                        title: data_title,
                        type: data_type,
                        count: 1
                    });
                }

                localStorage.setItem("basket2", JSON.stringify(basket2));

                showProductWindow.innerHTML = "";
                showProductWindow.style.display = 'flex';
                showProductWindow.innerHTML +=
                    `
                    <div class="window">
                        <i class="fa-solid fa-xmark closeProductWindow"></i>
                        <div class="left">
                            <p class="windowTitle"> ${data_title} </p>
                            <p class="windowDescription"> ${data_description} </p>
                            <p class="windowSize"> Size: </p>
                            <div class="windowSelect">
                                <select>
                                    <option></option>
                                </select>
                                <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.svg">
                            </div>
                            <div class="bottom">
                                <p class="windowPrice"> ${data_price} <span> USD </span> </p>
                                <p> Quantity </p>
                            </div>
                            <button type="submit"> Add to Cart</button>
                        </div>
                        <div class="productImg">
                            <img src="${data_image}">
                        </div>
                    </div>
                    `
            });

            let viewCart = document.querySelector('.viewCart');
            viewCart.addEventListener('click', () => {
                window.location.href = '/src/html/product.html'
            })

        });

        $(document).ready(function () {
            $(".slider").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 500,
                autoplaySpeed: 2500,
                infinite: true,
                autoplay: true,
                centerMode: true,
                centerPadding: "90px",
                arrows: false,
                dots: true
            });
        });
    });


let tabs = document.querySelectorAll('.bottom .tab');
let contents = document.querySelectorAll('.sliders .slider2');

for (let tab of tabs) {
    tab.addEventListener("click", function () {
        let tabActive = document.querySelector(".tabActive")
        tabActive.classList.remove("tabActive")
        this.classList.add("tabActive")

        let index = this.getAttribute("data-index")
        for (let content of contents) {
            if (index == content.getAttribute("data-index")) {
                content.classList.add("sliderShow")
            } else {
                content.classList.remove("sliderShow")
            }
        }
    })
}

$('.slider-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: false,
});

$(".slick-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
});