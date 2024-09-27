document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário
    const form = document.querySelector("form");

    // Função para validar o formulário
    function validateForm(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Seleciona os campos
        const nome = document.getElementById("nomesobrenome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const mensagem = document.getElementById("mensagem");

        // Verifica se todos os campos estão preenchidos
        if (!nome.value || !email.value || !telefone.value || !mensagem.value) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Verifica se o email é válido
        if (!validateEmail(email.value)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        // Se todos os campos estiverem corretos, exibe mensagem de sucesso
        alert("Formulário enviado com sucesso!");
        form.reset(); // Limpa o formulário
    }

    // Função para validar o email
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Adiciona o evento de envio ao formulário
    form.addEventListener("submit", validateForm);
});
