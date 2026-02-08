/*
 * Home Projects Slider
 * Interactive project showcase with smooth transitions
 */

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('projectSlider');
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show specific slide
    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        
        // Get direction
        const direction = index > currentSlide ? 'right' : 'left';
        
        // Disable buttons during transition
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        
        // Hide current slide with animation
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add(direction === 'right' ? 'exit-left' : 'exit-right');
        
        // Update dots
        dots[currentSlide].classList.remove('active');
        
        // Show new slide with delay for smooth transition
        setTimeout(() => {
            slides[currentSlide].classList.remove('exit-left', 'exit-right');
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
            
            // Re-enable buttons
            if (prevBtn) prevBtn.disabled = false;
            if (nextBtn) nextBtn.disabled = false;
        }, 300);
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners for buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Auto-play (optional - uncomment to enable)
    // let autoplayInterval;
    // function startAutoplay() {
    //     autoplayInterval = setInterval(nextSlide, 5000);
    // }
    // function stopAutoplay() {
    //     clearInterval(autoplayInterval);
    // }
    // startAutoplay();
    // slider.addEventListener('mouseenter', stopAutoplay);
    // slider.addEventListener('mouseleave', startAutoplay);
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
});
/**
 * Home Projects Slider
 * Interactive project showcase with smooth transitions
 */

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('projectSlider');
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show specific slide
    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        
        // Get direction
        const direction = index > currentSlide ? 'right' : 'left';
        
        // Disable buttons during transition
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        
        // Hide current slide with animation
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add(direction === 'right' ? 'exit-left' : 'exit-right');
        
        // Update dots
        dots[currentSlide].classList.remove('active');
        
        // Show new slide with delay for smooth transition
        setTimeout(() => {
            slides[currentSlide].classList.remove('exit-left', 'exit-right');
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
            
            // Re-enable buttons
            if (prevBtn) prevBtn.disabled = false;
            if (nextBtn) nextBtn.disabled = false;
        }, 300);
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners for buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Auto-play (optional - uncomment to enable)
    // let autoplayInterval;
    // function startAutoplay() {
    //     autoplayInterval = setInterval(nextSlide, 5000);
    // }
    // function stopAutoplay() {
    //     clearInterval(autoplayInterval);
    // }
    // startAutoplay();
    // slider.addEventListener('mouseenter', stopAutoplay);
    // slider.addEventListener('mouseleave', startAutoplay);
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
});
