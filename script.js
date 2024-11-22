

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic hover effects on breed sections
    const breedSections = document.querySelectorAll('.breed');
    breedSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            section.style.transform = 'scale(1.03)';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            section.style.transform = 'scale(1)';
        });
    });

    // Mobile menu toggle for better navigation
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;

    const nav = document.querySelector('header nav');
    nav.insertAdjacentElement('afterbegin', menuToggle);

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Ensure mobile menu respects responsive design
    if (window.innerWidth <= 768) {
        nav.querySelector('ul').style.display = 'none'; // Initially hide the menu
        menuToggle.addEventListener('click', () => {
            const menu = nav.querySelector('ul');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
});


















document.addEventListener('DOMContentLoaded', () => {
    // Select all team members
    const teamMembers = document.querySelectorAll('.team-member');

    // Loop through each team member
    teamMembers.forEach(member => {
        // Add event listener for mouseover (hover)
        member.addEventListener('mouseover', () => {
            // Apply hover effect (you can change this to any style you want)
            member.style.transform = 'scale(1.1)';
            member.style.transition = 'transform 0.3s ease-in-out';
        });

        // Add event listener for mouseout (when the cursor leaves)
        member.addEventListener('mouseout', () => {
            // Revert the hover effect
            member.style.transform = 'scale(1)';
        });
    });
});

















document.addEventListener('DOMContentLoaded', () => {
    // Select all event sections
    const events = document.querySelectorAll('.event');

    // Loop through each event
    events.forEach(event => {
        // Add event listener for mouseover (hover)
        event.addEventListener('mouseover', () => {
            event.style.transform = 'scale(1.05)';
            event.style.backgroundColor = '#f4f4f4'; // Light background on hover
            event.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease';
        });

        // Add event listener for mouseout (when the cursor leaves)
        event.addEventListener('mouseout', () => {
            event.style.transform = 'scale(1)';
            event.style.backgroundColor = '#fff'; // Revert to original background
        });
    });
});


















document.addEventListener("DOMContentLoaded", function () {
    // Select all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Loop through each question
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling; // The answer is the div next to the question

            // Toggle the visibility of the answer
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block"; // Show the answer
            } else {
                answer.style.display = "none"; // Hide the answer
            }
        });
    });
});























