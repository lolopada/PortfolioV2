window.addEventListener('load', function() {
    const popup = document.getElementById('welcome-popup');
    const closeButton = document.getElementById('close-popup');
    const body = document.body;
    
    popup.style.display = 'flex';
    body.style.overflow = 'hidden';
    
    function closePopup() {
        popup.style.display = 'none';
        body.style.overflow = 'auto';
        document.dispatchEvent(new CustomEvent('popupClosed'));
    }
    
    closeButton.addEventListener('click', closePopup);
    
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
});