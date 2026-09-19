document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  // 1. Créer le bouton du menu burger dynamiquement pour le responsive
  const menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "☰"; // Icône de trois barres horizontales
  menuToggle.setAttribute("aria-label", "Ouvrir le menu de navigation");

  // Insérer le bouton dans le header
  header.appendChild(menuToggle);

  // 2. Gérer le clic sur le bouton pour afficher/masquer le menu
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    
    // Changer l'icône selon l'état du menu
    if (nav.classList.contains("nav-active")) {
      menuToggle.innerHTML = "✕"; // Icône de fermeture
      menuToggle.setAttribute("aria-label", "Fermer le menu de navigation");
    } else {
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
    }
  });
});