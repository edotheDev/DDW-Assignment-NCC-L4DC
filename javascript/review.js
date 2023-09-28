const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const rContainer = document.getElementById('review-container');

signUpButton.addEventListener('click', () => {
    rContainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    rContainer.classList.remove("right-panel-active");
});