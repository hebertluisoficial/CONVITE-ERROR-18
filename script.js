const conviteBtn = document.getElementById('convite-btn');
const infoBtn = document.getElementById('info-btn');
const videoContainer = document.getElementById('video-container');
const infoContainer = document.getElementById('info-container');
const voltarBtn = document.getElementById('voltar-btn');
const voltarPopBtn = document.getElementById('voltar-pop-btn');

const infoText = `
Informações() => {
    Data: Domingo, 05 de Maio de 2024
    Horário: A partir das 11h da manhã
    Local: AABB - Quiosque Rio G. do Sul
    Programação: Festa, Churras e Alegria
  }

//Os convites são extremamente restritos, portanto pedimos a confirmação de sua presença dentro do prazo de 01 semana, combinado? Você também pode fazer isso pelo botão 'CONFIRMAÇÃO' na página inicial.

//TE VEJO LÁ! ↓`;

let currentText = '';
let currentIndex = 0;
let typingSpeed = 10; // Velocidade de digitação (em milissegundos)

function typeText() {
    if (currentIndex < infoText.length) {
        currentText += infoText.charAt(currentIndex);
        infoContainer.innerText = currentText;
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        voltarBtn.style.display = 'block'; // Mostra o botão "Voltar" após a animação estar completa
    }
}

conviteBtn.addEventListener('click', function() {
    videoContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

infoBtn.addEventListener('click', function() {
    document.getElementById('header').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('footer').style.display = 'block';
    infoContainer.style.display = 'block';
    typeText(); // Inicia a animação de digitação
});

voltarBtn.addEventListener('click', function() {
    document.getElementById('header').style.display = 'block';
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('footer').style.display = 'block';
    infoContainer.style.display = 'none';
    voltarBtn.style.display = 'none';

    // Reinicia as variáveis para a próxima vez que o botão de informações for clicado
    currentText = '';
    currentIndex = 0;
    infoContainer.innerText = '';
});

voltarPopBtn.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
    window.location.reload(); // Atualiza a página
});

// Detecção de término do vídeo do YouTube
const player = document.getElementById('video');
player.addEventListener('onStateChange', function(event) {
    if (event.data === 0) { // O estado 0 indica que o vídeo terminou
        videoContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
