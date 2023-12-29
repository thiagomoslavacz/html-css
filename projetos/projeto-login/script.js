function cadastrou() {
    var campoEmail = window.document.getElementById('email').value;
    var campoPassword = window.document.getElementById('password').value;

    if (campoEmail.trim() === '') {
        alert('Por favor, insira seu email');
        return false;
    }

    if (campoPassword.trim() === '' || !campoEmail.includes('@')) {
        alert('Por favor, insira sua senha');
        return false;
    }

    alert('Login efetuado!');
    return true;
}