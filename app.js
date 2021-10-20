const testimonialCard = document.querySelectorAll('.rating__card');
const secondTestimonialCard = document.querySelector('.second--card');
const thirdTestimonialCard = document.querySelector('.third--card');

testimonialCard.forEach((card) => {
    card.addEventListener("mouseover", e => {
        e.target.style.color = '#ee68a4';
    
        setTimeout(() => {
            e.target.style.color = '';
        }, 1000);
    });
});

secondTestimonialCard.addEventListener('click', e => {
    e.target.style.marginLeft = '0';
    
    setTimeout(() => {
        e.target.style.marginLeft = '';
    }, 2000);

    e.stopPropagation();
});

thirdTestimonialCard.addEventListener('click', e => {
    e.target.style.marginLeft = '0';

    setTimeout(() => {
        e.target.style.marginLeft = '';
    }, 2000);

    e.stopPropagation();
});