document.addEventListener('DOMContentLoaded', () => {

    // --- Part 1: JavaScript Event Handling and Interactive Elements ---

    /**
     * Handles the click event on the "Click Me!" button.
     * It displays a confirmation message below the button.
     */
    const clickMeBtn = document.getElementById('clickMeBtn');
    const clickMessage = document.getElementById('clickMessage');
    clickMeBtn.addEventListener('click', () => {
        clickMessage.textContent = 'Button was clicked! Great job!';
    });

    /**
     * Handles mouseover and mouseout events on the hover box.
     * Changes the background color and text of the box.
     */
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = '#007bff';
        hoverBox.style.color = '#ffffff';
        hoverBox.textContent = 'You hovered over me!';
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '#e9ecef';
        hoverBox.style.color = '#333';
        hoverBox.textContent = 'Hover over me!';
    });


    // --- Part 2: Building Interactive Elements ---

    /**
     * Feature 1: Light/Dark Mode Toggle
     * Toggles a 'dark-mode' class on the body element to switch themes.
     */
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    /**
     * Feature 2: Collapsible FAQ Section
     * Adds a click event listener to each FAQ question to toggle the answer's visibility.
     */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the answer and rotate the icon
            item.classList.toggle('active');
        });
    });


    // --- Part 3: Form Validation with JavaScript ---

    const form = document.getElementById('contactForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('formSuccessMessage');

    /**
     * Handles the form submission event.
     * Prevents the default submission and validates the form fields.
     */
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Reset previous messages
        clearErrors();
        successMessage.textContent = '';
        
        let isValid = true;

        // Validate Username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        }

        // Validate Email
        if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Password
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        // If all fields are valid, show a success message
        if (isValid) {
            successMessage.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });

    /**
     * Clears all error messages from the form.
     */
    function clearErrors() {
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    }

    /**
     * Validates an email string using a regular expression.
     * @param {string} email The email to validate.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
