let password = document.getElementById('password'),
    button = document.getElementById('button'),
    error = document.querySelector('.error');

button.addEventListener('click', () => {
    if (password.value == "1") {
        sessionStorage.setItem('login', true);
        window.location.href = "/index.html"
    } else {
        password.value = ""
        password.style.border = '1px solid #bf0711'
        password.style.backgroundColor = '#fbeae5'
        error.style.display = 'flex'
    }
})