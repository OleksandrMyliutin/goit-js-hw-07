const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formInput = event.target;
    const email = formInput.elements.email.value.trim();
    const password = formInput.elements.password.value.trim();
    if (email === "" || password === "" ) {
        alert("All form fields must be filled in");
        return;
    }
    const formData = {
        email,
        password,
    }
    console.log(formData);
    formInput.reset();
}
