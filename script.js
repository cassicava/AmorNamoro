// Data de início do namoro 
const dataInicio = new Date("2024-12-27T20:30:00"); 

// Função para calcular o tempo de namoro em dias, horas, minutos e segundos
function calcularTempoDeNamoro() {
  const dataAtual = new Date();
  const tempo = dataAtual - dataInicio;

  // Convertendo o tempo de milissegundos para unidades maiores
  const dias = Math.floor(tempo / (1000 * 60 * 60 * 24)); // Total de dias
  const horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
  const minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
  const segundos = Math.floor((tempo % (1000 * 60)) / 1000); // Segundos restantes

  return `${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`;
}

// Exibindo o tempo de namoro no HTML
function atualizarTempo() {
  document.getElementById(
    "tempo-namoro"
  ).textContent = `Juntinhos desde ${calcularTempoDeNamoro()}.`;
}

// Atualiza o tempo a cada segundo
setInterval(atualizarTempo, 1000);

// Chama a função inicialmente para garantir que o tempo seja exibido logo que a página for carregada
atualizarTempo();

//================================================================

// Lista de imagens de fundo
const imagensDeFundo = [
  'url("imagens/imagem1.jpg")', // Substitua pelos caminhos reais das suas imagens
  'url("imagens/imagem2.jpg")',
  'url("imagens/imagem3.jpg")'
];

// Função para trocar a imagem de fundo
let indiceImagem = 0;
function mudarImagemDeFundo() {
  const backgroundElement = document.querySelector(".background");
  backgroundElement.style.backgroundImage = imagensDeFundo[indiceImagem];
  indiceImagem = (indiceImagem + 1) % imagensDeFundo.length; // Vai para a próxima imagem e reinicia quando chegar no final
}

// Chama a função de mudança de imagem a cada 5 segundos (5000ms)
setInterval(mudarImagemDeFundo, 5000);

// Inicializa a primeira imagem
mudarImagemDeFundo();

//===============================================

const audio = document.querySelector("audio"); // Seleciona a tag de áudio
audio.volume = 0.5; // Define o volume para 50% (ajuste conforme desejar)
