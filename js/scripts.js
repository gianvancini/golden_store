// Rolagem suavizada
let scrollLinks = document.getElementsByClassName('scroll-link');

for (let i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  
  let targetId = this.getAttribute('href');
  let targetElement = document.querySelector(targetId);
  
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Menu mobile
function toggleMenu() {
    let menu = document.querySelector('.menu');
    let nav = document.querySelector('nav');
    
    menu.classList.toggle('open');
    nav.classList.toggle('open');
}

// Abrir lista
function visitList() {
    window.open("https://drive.google.com/drive/folders/1JJ269tWmoffEy-EZGPdzFxNc5vfjzx4E?usp=drive_link", "_blank");
}

// Formulário

document.addEventListener('DOMContentLoaded', function () {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    let sendButton = document.getElementById('sendButton');

    name.addEventListener('input', verify);
    email.addEventListener('input', verify);
    message.addEventListener('input', verify);

    function verify() {    
        if (name.value != "" && email.value != "" && message.value != "" && message.value != "") {
            sendButton.removeAttribute('disabled');
        } else {
            sendButton.setAttribute('disabled', 'disabled');
        }
    }
});

function sendMessage() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    let sendButton = document.getElementById('sendButton');
    let messageSended = document.getElementById('messageSended');

    fetch('https://formspree.io/f/mayrqryn', {
        method: 'POST',
        body: new FormData(document.getElementById('form')),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        messageSended.innerHTML = "Mensagem enviada com sucesso!";
        messageSended.style.display = 'block';
        form.reset();
      })
      .catch(error => {
        console.error('Erro:', error);
        messageSended.innerHTML = "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
        messageSended.style.display = 'block';
      });
}
