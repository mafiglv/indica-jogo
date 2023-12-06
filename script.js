document.addEventListener('DOMContentLoaded', function () {
    showListagem(); 
});

function showListagem() {
    const listaJogos = document.getElementById('listaJogos');

    
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];

    if (jogos.length === 0) {
        listaJogos.innerHTML = '<p>Nenhum jogo cadastrado.</p>';
    } else {
        const listagemHTML = jogos.map(jogo => `<li>${jogo.nome} - ${jogo.descricao}</li>`).join('');
        listaJogos.innerHTML = listagemHTML;
    }
}

function cadastrarJogo() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;

    if (nome && descricao) {
        
        const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
        jogos.push({ nome, descricao });
        localStorage.setItem('jogos', JSON.stringify(jogos));

       
        document.getElementById('cadastroForm').reset();

        
        alert('Jogo cadastrado com sucesso!');
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
}
