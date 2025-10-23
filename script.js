const button = document.querySelector('#visibility')
const password = document.querySelector('#password')

button.addEventListener('click', function(e) {
    if (password.type == 'password') {
        password.type = 'text';
        button.textContent = 'visibility';
    } else {
        password.type = 'password';
        button.textContent = 'visibility_off';
    }
})

const button2 = document.querySelector('#visibility2')
const password2 = document.querySelector('#cpassword')

button2.addEventListener('click', function(e) {
    if (password2.type == 'password') {
        password2.type = 'text';
        button2.textContent = 'visibility';
    } else {
        password2.type = 'password';
        button2.textContent = 'visibility_off';
    }
})
