$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = {
            username: $('#username').val(),
            dob: $('#dob').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            retypePassword: $('#retype-password').val(),
            terms: $('#terms').is(':checked')
        };

        // Here you can handle the form data, e.g., send it to a server
        console.log('Form Data Submitted:', formData);
    });
});