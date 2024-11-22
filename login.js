const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpSubmitButton = document.querySelector('.sign-up-container button'); 

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


signUpSubmitButton.addEventListener('click', () => {
  
  container.classList.add("right-panel-active");

 
  setTimeout(() => {
    window.location.href = "index.html";  
  }, 500); 
});
