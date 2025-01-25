//recharge la page pour eviter des potentiels problemes d'animations

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

const handleResize = debounce(() => {
    window.location.reload();
}, 250);

window.addEventListener('resize', handleResize);