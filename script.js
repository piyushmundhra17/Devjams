// Home page script

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section's ID
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});
