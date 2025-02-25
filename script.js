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
  ).textContent = `Juntinhos há ${calcularTempoDeNamoro()}.`;
}

// Atualiza o tempo a cada segundo
setInterval(atualizarTempo, 1000);

// Chama a função inicialmente para garantir que o tempo seja exibido logo que a página for carregada
atualizarTempo();

//================================================================

// Lista de imagens de fundo
const imagensDeFundo = [
  'url("i1.jpeg")', 
  'url("i2.jpeg")',
  'url("i3.jpeg")', 
  'url("i4.jpeg")',
  'url("i5.jpeg")'
];

// Função para trocar a imagem de fundo
let indiceImagem = 0;

function mudarImagemDeFundo() {
  const backgroundElement = document.querySelector("body");

  // Antes de trocar a imagem, remove a classe 'visible' para dar a transição suave
  backgroundElement.classList.remove("visible");

  // Troca a imagem de fundo
  backgroundElement.style.backgroundImage = imagensDeFundo[indiceImagem];

  // Aplica a classe 'visible' para mostrar a nova imagem com transição
  setTimeout(() => {
    backgroundElement.classList.add("visible");
  }, 100); // Espera um pouco antes de adicionar a classe para garantir o efeito de fade

  indiceImagem = (indiceImagem + 1) % imagensDeFundo.length; // Vai para a próxima imagem
}

// Chama a função de mudança de imagem a cada 5 segundos (5000ms)
setInterval(mudarImagemDeFundo, 5000);

// Inicializa a primeira imagem
mudarImagemDeFundo();

//===============================================

// Controla o áudio
const audio = document.querySelector("audio"); // Seleciona a tag de áudio
audio.volume = 0.5; // Define o volume para 50% (ajuste conforme necessário)

// Toca o áudio assim que a página for carregada (acredito que o autoplay esteja bloqueado, então fazemos manualmente)
window.onload = () => {
  document.body.style.opacity = 1;
  audio.play(); // Toca o áudio ao carregar a página
};
