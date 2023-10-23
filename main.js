/* Validação de mensagem enviada */
document.getElementById('submit').addEventListener('click', function () {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    if (!nome || !email || !mensagem) {
        alert('Preeencha todos os campos do formulário!')
    } else {
        alert('Mensagem enviada!')
        document.getElementById('nome').value = ''
        document.getElementById('email').value = ''
        document.getElementById('mensagem').value = ''
    }
})