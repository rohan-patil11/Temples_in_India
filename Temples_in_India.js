let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#create-form-close').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');
}

document.querySelector('#login2').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');
}

document.querySelector('#create-btn').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-page').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 300;
        let y = (window.innerHeight - e.pageY * speed) / 300;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-page').forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
}

function toggleDetails(card) {
    var details = card.querySelector('.service-details');
    details.classList.toggle('visible');
}

window.onload = () => {
    // Header style on load
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    // Initialize Swiper for Temples section
    new Swiper(".temples-s", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initialize Swiper for Featured section
    new Swiper(".featured-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};
