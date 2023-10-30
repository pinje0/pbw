document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        submitButton.classList.add('success');
        submitButton.classList.remove('submit');

        submitButton.value = 'Submitted';

        setTimeout(function () {
            submitButton.classList.add('submit');
            submitButton.classList.remove('success');
            submitButton.value = 'Submit';
        }, 1000);
    });
});
