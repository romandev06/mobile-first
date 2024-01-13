const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const moreText = document.querySelectorAll('.more-text');
const detailsText = document.querySelectorAll('.details-text');

moreText.forEach((moreText, index) => {
    moreText.onclick = function handleClick() {
        detailsText[index].innerHTML = `<p class="services__item-text">Создадим уникальный и удобный дизайн..</p>
        <a href="#" class="services__item-link">Подробнее →</a>`

        moreText.style.border = '4px solid #2B4074';
        moreText.style.transitionDuration = '0.6s'
        moreText.style.padding = '42px 0'
        detailsText[index].querySelector('.services__item-text').style.width = '195px'
        detailsText[index].querySelector('.services__item-text').style.color = '#9B9B9B'
        detailsText[index].querySelector('.services__item-text').style.margin = '17px auto 17px auto'
        detailsText[index].querySelector('.services__item-link').style.color = '#2B4074'
        detailsText[index].querySelector('.services__item-link').style.letterSpacing = '1px'
        detailsText[index].querySelector('.services__item-link').style.fontFamily = 'RobotoCondenced-Bold'
        detailsText[index].querySelector('.services__item-link').style.fontWeight = '600'
        detailsText[index].querySelector('.services__item-link').style.textTransform = 'uppercase'

        moreText.removeEventListener('click', handleClick);
    };
});


const swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
    },
});


const footerOpen = document.getElementById('footer-open')


