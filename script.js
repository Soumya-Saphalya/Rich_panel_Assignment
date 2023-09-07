// script.js
document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');

    if (signupBtn) {
        signupBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the form from submitting by default

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (name === '' || email === '' || password === '') {
                alert('Please fill in all fields.');
                return; // Don't proceed with form submission
            }

            // Handle registration logic here
            alert('Registration button clicked');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the form from submitting by default

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === '' || password === '') {
                alert('Please fill in all fields.');
                return; // Don't proceed with form submission
            }

            // Handle login logic here
            alert('Login button clicked');
        });
    }
});
