
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Aqui esta algumas das perguntas mais recentes ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "index.html";
}

const perguntas = [];

function adicionarPergunta() {
    const pergunta = document.getElementById('pergunta').value;
    if (pergunta.trim() !== '') {
        perguntas.push(pergunta);
        exibirPerguntas();
        document.getElementById('pergunta').value = '';
    }
}

function exibirPerguntas() {
    const listaPerguntas = document.getElementById('lista-perguntas');
    listaPerguntas.innerHTML = '';

    for (let i = 0; i < perguntas.length; i++) {
        listaPerguntas.innerHTML += `<p><strong>Pergunta ${i + 1}:</strong> ${perguntas[i]}</p>`;
    }
}
