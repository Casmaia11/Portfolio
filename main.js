// Script Cabeçalho

const cabecalho = document.querySelector(".cabecalho");
const toggleClass = "anima";

window.addEventListener("scroll", () => {
    const currentScroll = document.documentElement.scrollTop
    if (currentScroll > 150) {
        cabecalho.classList.add(toggleClass);
    } else {
        cabecalho.classList.remove(toggleClass);
    }
});

// Script Type Text

var texto = new Typed(".tipando", {
    strings: ["Front-end Developer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
}) 

// Script Contact Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbzMC5FUOGwqoODmnKqa0Vu_xrg-tm1FZr5Kwyn1obq39kD-ZmcBn19AdLuVZByagD3M/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Formulário enviado');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            alert('Mensagem enviada com sucesso!');
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        });
});

