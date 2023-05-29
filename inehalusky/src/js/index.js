
const review_slider = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.custom-prev',
        prevEl: '.custom-next',
    },
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
        bulletClass: "slider_bullet",
        bulletActiveClass: "slider_bullet_active"
    },
})