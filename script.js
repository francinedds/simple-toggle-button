const toggleButton = document.getElementById('toggle-button');
let darkMode = false; //modo dark desativado

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode; //a '!' significa uma negeção, ou seja, já que era falso lá em cima, se torna 'true' (ativo)
    document.body.classList.toggle('dark-mode', darkMode);
    toggleButton.innerHTML = darkMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'; //alterna o texto do botão
});