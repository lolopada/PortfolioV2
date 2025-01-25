window.addEventListener('load', function() {
    const popup = document.getElementById('welcome-popup');
    const popupContent = document.querySelector('.popup-content');
    const closeButton = document.getElementById('close-popup');
    const body = document.body;
    
    popup.style.display = 'flex';
    body.style.overflow = 'hidden';
    
    function closePopupAndStartAnimations() {
        popupContent.classList.add('closing');
        
        setTimeout(() => {
            popup.style.display = 'none';
            body.style.overflow = 'auto';
            popupContent.classList.remove('closing');
            
            // Dispatch custom event when popup closes
            document.dispatchEvent(new CustomEvent('popupClosed'));
        }, 500);
    }
    
    closeButton.addEventListener('click', closePopupAndStartAnimations);
    
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopupAndStartAnimations();
        }
    });
});