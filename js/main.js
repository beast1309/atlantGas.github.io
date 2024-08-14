$(function () {

    $('#small').on('click', function () {
        $('.buy__tabs-btn').removeClass('--active')
        $('.buy__tabs-btn').removeAttr('disabled')
        $('.buy__images-item').removeClass('--active')
        $('#small').toggleClass('--active')
        $('#small').attr('disabled', 'disabled')
        $('#small-img').toggleClass('--active')
    })

    $('#medium').on('click', function () {
        $('.buy__tabs-btn').removeClass('--active')
        $('.buy__tabs-btn').removeAttr('disabled')
        $('.buy__images-item').removeClass('--active')
        $('#medium').toggleClass('--active')
        $('#medium').attr('disabled', 'disabled')
        $('#medium-img').toggleClass('--active')
    })

    $('#standart').on('click', function () {
        $('.buy__tabs-btn').removeClass('--active')
        $('.buy__tabs-btn').removeAttr('disabled')
        $('.buy__images-item').removeClass('--active')
        $('#standart').toggleClass('--active')
        $('#standart').attr('disabled', 'disabled')
        $('#standart-img').toggleClass('--active')
    })

    $('#large').on('click', function () {
        $('.buy__tabs-btn').removeClass('--active')
        $('.buy__tabs-btn').removeAttr('disabled')
        $('.buy__images-item').removeClass('--active')
        $('#large').toggleClass('--active')
        $('#large').attr('disabled', 'disabled')
        $('#large-img').toggleClass('--active')
    })

    $('.questhions__list-item__text.--1').on('click', function () {
        $('.questhions__list-item__text.--1').toggleClass('--active')
    })
    $('.questhions__list-item__text.--2').on('click', function () {
        $('.questhions__list-item__text.--2').toggleClass('--active')
    })
    $('.questhions__list-item__text.--3').on('click', function () {
        $('.questhions__list-item__text.--3').toggleClass('--active')
    })
    $('.questhions__list-item__text.--4').on('click', function () {
        $('.questhions__list-item__text.--4').toggleClass('--active')
    })
    $('.questhions__list-item__text.--5').on('click', function () {
        $('.questhions__list-item__text.--5').toggleClass('--active')
    })

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        effect: "cards",
        grabCursor: true,
        rewind: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },

        navigation: {
            nextEl: '.swiper-button-next-img',
            prevEl: '.swiper-button-prev-img',
        }
    })


    const popupCall = document.querySelectorAll('#pupupCall')
    popupCall.forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.popup').classList.add('--visible', 'animate__animated', 'animate__fadeIn')
        })
    })

    const popupClose = document.getElementById('pupupClose')
    popupClose.addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('--visible', 'animate__animated', 'animate__fadeIn')
    })

    const buyBtn = document.getElementById('buy-btn')
    buyBtn.addEventListener('click', () => {

        const buyText = document.getElementById('buy-text')
        const buyTel = document.getElementById('buy-tel')

        if (buyText.value !== '' && buyTel.value !== '') {
            window.location.href = "http://localhost:3000/deal.html?"
        }

        else {
            return
        }
    })
});