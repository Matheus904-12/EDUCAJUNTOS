// Redireciona para a tela de login ao clicar no botão "Vamos Começar"
function goToLogin() {
    window.location.href = "../login/login.html"; // Substitua com o URL correto da sua página de login
}

// Controla o dropdown do menu hamburguer
const menuBtn = document.querySelector(".menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});
