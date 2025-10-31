document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Add click handlers for accordion sections
    setupAccordions();
});

function setupAccordions() {
    const dayHeaders = document.querySelectorAll('.day-header');

    dayHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');

            // Close all other sections
            const allContents = document.querySelectorAll('.day-content');
            const allIcons = document.querySelectorAll('.day-header i');

            allContents.forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });

            allIcons.forEach(item => {
                if (item !== icon) {
                    item.classList.remove('fa-chevron-up');
                    item.classList.add('fa-chevron-down');
                }
            });

            // Toggle current section
            content.classList.toggle('active');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
}