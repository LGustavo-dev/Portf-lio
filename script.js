const messages = [
  "Olá, meu nome é Luiz",
  "Sou desenvolvedor full stack",
  "hello, my name is luiz",
  "I am a full stack developer",
];

const typingElement = document.getElementById("typing-text");
let messageIndex = 0, charIndex = 0, isDeleting = false;

function setLanguage(lang) {
  const aboutTitle = document.getElementById("about-title");
  const aboutText = document.getElementById("about-text");

  if (lang === "pt") {
    aboutTitle.innerText = "Sobre mim";
    aboutText.innerHTML = "Olá, meu nome é Luiz Gustavo, sou desenvolvedor full stack em início de carreira, apaixonado por tecnologia e programação. Tenho experiência em HTML, CSS, JavaScript, Python, C e SQL, e estou sempre buscando aprender e evoluir. Meu objetivo é criar soluções eficientes e criativas, tanto no front-end quanto no back-end.";
  } else if (lang === "en") {
    aboutTitle.innerText = "About me";
    aboutText.innerHTML = "Hello, my name is Luiz Gustavo, I'm a junior full stack developer passionate about technology and programming. I have experience in HTML, CSS, JavaScript, Python, C, and SQL, and I'm always looking to learn and improve. My goal is to create efficient and creative solutions, both in front-end and back-end.";
  }
}
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
const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("en")) {
      setLanguage("en");
    } else {
      setLanguage("pt");
    }
typeEffect();
