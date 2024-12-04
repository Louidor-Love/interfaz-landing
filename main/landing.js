
document.addEventListener('DOMContentLoaded', () => {
    console.log('arrancamos');
    const slider = document.querySelector('.image-slider');
    const items = document.querySelectorAll('.destino');
    const itemsPerScroll = 4; 
    const itemWidth = items[0].offsetWidth; 
    let scrollAmount = itemWidth * itemsPerScroll;
    let currentPosition = 0;
    let isScrolling = false;

    function smoothScroll(direction) {
        if (isScrolling) return; 
        isScrolling = true;
        const targetPosition = currentPosition + (direction * scrollAmount);

        const interval = setInterval(() => {
            currentPosition += (direction * 8); 
            slider.scrollLeft = currentPosition;
        
            if ((direction === 1 && currentPosition >= targetPosition) || 
                (direction === -1 && currentPosition <= targetPosition) ||
                currentPosition <= 0 ||
                currentPosition >= slider.scrollWidth - slider.clientWidth){
                clearInterval(interval);
                isScrolling = false;
            }
        }, 8); 
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        if  (!isScrolling && currentPosition > 0) {
            smoothScroll(-1);
        }    
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        if (!isScrolling && currentPosition < slider.scrollWidth - slider.clientWidth) { 
            smoothScroll(1);
        }
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 2000,  
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
        },
    });
    
});








