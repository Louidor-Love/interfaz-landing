
document.addEventListener('DOMContentLoaded', () => {
    console.log('arrancamos');
    const slider = document.querySelector('.image-slider');
    const items = document.querySelectorAll('.destino');
    const itemsPerScroll = 4; 
    const itemWidth = items[0].offsetWidth; 
    let scrollAmount = itemWidth * itemsPerScroll;
    let currentPosition = 0;
    let isScrolling = false;
    //Define la función smoothScroll, que maneja el desplazamiento suave 
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
    //Cuando se hace clic en este botón, se llama a la función que mueve el contenedor hacia la izquierda.
    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        if  (!isScrolling && currentPosition > 0) {
            smoothScroll(-1);
        }    
    });
    //Esta línea mueve el contenedor hacia la derecha cuando se hace clic en el botón.
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



    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
    // Event listener para cuando se envía el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Mostrar mensaje de confirmación
        message.textContent = "Thank you for your message! We have received it.";
        message.style.color = 'green'; // Cambiar el color a verde para indicar éxito

        // Opcional: limpiar el formulario después de mostrar el mensaje
        form.reset();
    });
    
});








