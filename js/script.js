document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Generate days content (if on index page)
    const container = document.querySelector('.container');
    if (container && window.location.pathname.includes('index.html')) {
        generateDays();
    }

    // Add click handlers for accordion sections
    setupAccordions();
});

function generateDays() {
    const startDate = new Date(2025, 10, 2); // November 2, 2025
    const container = document.querySelector('.container');

    for (let i = 1; i <= 12; i++) {
        const dayDate = new Date(startDate);
        dayDate.setDate(dayDate.getDate() + (i * 7)); // Every Monday

        const daySection = createDaySection(i, dayDate);
        container.appendChild(daySection);
    }
}

function createDaySection(dayNumber, date) {
    const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const section = document.createElement('div');
    section.className = 'day-section';
    section.innerHTML = `
        <div class="day-header">
            <h2>DAY ${dayNumber.toString().padStart(2, '0')} (${formattedDate})</h2>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="day-content">
            <div class="section">
                <h3>Description</h3>
                <ul>
                    <li>Basic Grammar Lessons</li>
                    <li>Practice Exercises</li>
                </ul>
            </div>
            <div class="section">
                <h3>Papers to be Printed</h3>
                <ul>
                    <li><a href="#" target="_blank">Practice Paper ${dayNumber}</a></li>
                </ul>
            </div>
            <div class="section">
                <h3>Evaluations</h3>
                <ul>
                    <li><a href="#" target="_blank">Online Assessment ${dayNumber}</a></li>
                </ul>
            </div>
            <div class="section">
                <h3>Lecture Recording</h3>
                <ul>
                    <li><a href="#" target="_blank">Watch Recording</a></li>
                </ul>
            </div>
        </div>
    `;

    return section;
}

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