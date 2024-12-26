document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('.content-section');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const currentIcon = card.querySelector('.card-icon');
            const iconActive = card.getAttribute('data-icon-active');
            const iconDefault = card.getAttribute('data-icon');

            // Reset all cards
            cards.forEach(c => {
                const icon = c.querySelector('.card-icon');
                const defaultIcon = c.getAttribute('data-icon');

                if (icon && defaultIcon) {
                    icon.src = defaultIcon;
                }
                c.classList.remove('active');
            });

            // Highlight the clicked card
            if (currentIcon && iconActive) {
                currentIcon.src = iconActive;
            }
            card.classList.add('active'); 

            // Hide all sections and show the target section
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('active');

                // Scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
