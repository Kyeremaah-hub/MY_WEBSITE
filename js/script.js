// Open the image in popup
function openPopup(image) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = image.src;
    popupOverlay.style.display = 'flex';
}

// Close the popup
document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('popup-overlay').style.display = 'none';
});

// Close popup if clicked outside of the image
document.getElementById('popup-overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
