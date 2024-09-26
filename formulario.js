document.addEventListener('DOMContentLoaded', function() {
    // Referência ao formulário
    const form = document.querySelector('form');

    // Quando o formulário for enviado
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir envio padrão

        // Pegar os valores dos campos
        const nomeSobrenome = document.getElementById('nomesobrenome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validações
        if (!nomeSobrenome || !email || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Exibir mensagem de sucesso
        alert(`Obrigado, ${nomeSobrenome}! Seu formulário foi enviado com sucesso. Entraremos em contato via ${obterFormaDeContato()}.`);

        // Limpar o formulário após o envio
        form.reset();
    });

    // Função para obter a forma de contato preferida
    function obterFormaDeContato() {
        const contato = document.querySelector('input[name="contato"]:checked');
        return contato ? contato.value : 'email';  // Retorna "email" se nenhum estiver selecionado
    }

    // Função para verificar se a loja está aberta com base no horário atual
    function verificarHorarioFuncionamento() {
        const diasAtendimento = ['Segunda', 'Quarta', 'Sexta'];
        const horarioInicio = 8;
        const horarioFim = 20;

        const hoje = new Date();
        const diaSemana = hoje.toLocaleString('pt-BR', { weekday: 'long' });
        const horaAtual = hoje.getHours();

        if (diasAtendimento.includes(diaSemana) && horaAtual >= horarioInicio && horaAtual < horarioFim) {
            alert(`A loja está aberta! Hoje é ${diaSemana} e estamos atendendo das 8h às 20h.`);
        } else {
            alert(`A loja está fechada no momento. Nosso horário de atendimento é de segunda, quarta e sexta das 8h às 20h.`);
        }
    }

    // Verificar se a loja está aberta ao carregar a página
    verificarHorarioFuncionamento();
});
