document.querySelectorAll('.book-card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.boxShadow =
        '0 20px 40px rgba(200,169,107,.25)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = 'none';

    });

});