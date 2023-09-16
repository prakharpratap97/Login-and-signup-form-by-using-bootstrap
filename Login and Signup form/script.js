document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            const confirmPassword = signupForm.confirmPassword.value;

            // Perform form validation and submit data to the server if needed
            // For this example, you can just display a success message
            alert('Sign up successful!');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            // Perform login validation and authentication
            // For this example, you can just display a success message
            alert('Login successful!');
        });
    }
});
