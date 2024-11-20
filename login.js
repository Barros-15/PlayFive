const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpSubmitButton = document.querySelector('.sign-up-container button'); // Botão de "Criar Conta"

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Redireciona para a página principal quando "Criar Conta" é clicado
signUpSubmitButton.addEventListener('click', () => {
  // Adiciona a classe para a animação
  container.classList.add("right-panel-active");

  // Redireciona para a página index.html após 500ms (para esperar a animação)
  setTimeout(() => {
    window.location.href = "index.html";  // Redireciona para o index.html
  }, 500); // Aguarda 500ms para a animação de transição
});
