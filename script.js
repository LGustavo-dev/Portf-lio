const messages = [
  "Olá, meu nome é Luiz",
  "Sou desenvolvedor full stack",
  "hello, my name is luiz",
  "I am a full stack developer",
];

const typingElement = document.getElementById("typing-text");
let messageIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentMessage = messages[messageIndex];
  if (isDeleting) {
    typingElement.textContent = currentMessage.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentMessage.substring(0, charIndex + 1);
    charIndex++;
  }
  let typingSpeed = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === currentMessage.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    messageIndex = (messageIndex + 1) % messages.length;
    typingSpeed = 300;
  }
  setTimeout(typeEffect, typingSpeed);
}


typeEffect();
