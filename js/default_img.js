document.querySelectorAll('img').forEach(img => {
    // handle missing images if error was thrown
    img.onerror = function () {
        this.onerror = null; // Prevents an infinite loop if the default image fails
        this.src = '../images/default_image.jpg'; 
        this.alt = "default athlete image"; 
    };
});