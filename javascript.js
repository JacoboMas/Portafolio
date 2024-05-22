document.getElementById('copyButton').addEventListener('click', function () {
    const email = 'xacoss@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Correo copiado: ' + email);
});
