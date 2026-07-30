// =============================================
// CARRUSEL DE BENEFICIOS — Swiper
// =============================================

const beneficiosSwiper = new Swiper('.beneficios-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2.5,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.beneficios-next',
        prevEl: '.beneficios-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});