document.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in');
    fadeInSections.forEach(section => {
        section.classList.add('visible');
    });

    // Animasi teks
    const textAnimateElements = document.querySelectorAll('.text-animate');
    textAnimateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // Delay for each element
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing fade-in and text animation code...

    // Add click event listener to the button
    document.getElementById('click-me').addEventListener('click', function() {
        alert('Button clicked!');
    });
});
