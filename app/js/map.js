window.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelectorAll('.slider-dots'),
        map = document.querySelector('.slider-map');
    
    function hideContent() {
        dot.forEach(item => {
            item.classList.remove('slick-current');
        })
    }

    function showContent(i = 0) {
        dot[i].classList.add('slick-current');
    }
    hideContent();
    showContent();

    map.addEventListener('click', (e) => {
        if (e.target.className == 'slider-dots__circle') {
            let target = e.target;
            dot.forEach((item, i) => {
                if (item == target.parentElement) {
                    hideContent();
                    showContent(i);
                    console.log(i);
                }
            })
        }
    });

});