document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const registerButton = form.querySelector('button[type="submit"]');
    const paymentModal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.close-button');

    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Registration done'); // Show the alert message
        form.reset(); // Optional: Reset the form fields after registration
    });

    document.getElementById('goToPayment').addEventListener('click', function() {
        // Show the payment successful modal
        paymentModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        paymentModal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });
});