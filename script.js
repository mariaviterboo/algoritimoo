const avance = document.querySelectorAll('.btn-proximo');

avance.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querSelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPaaso).classList.add('ativo');
    })
})