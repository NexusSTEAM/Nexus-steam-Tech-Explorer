document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GESTION DES FENÊTRES MODALES (EN SAVOIR PLUS) ---
    // Base de données locale pour les descriptions détaillées
    const outilsDetails = {
        "le stéthoscope": "Le stéthoscope permet d'ausculter les bruits cardiaques (valves) et pulmonaires (murmure vésiculaire). C'est l'outil diagnostic fondamental du médecin généraliste et du cardiologue.",
        "le tensiomètre": "Essentiel pour le suivi cardiovasculaire. Il mesure la pression systolique (contraction du cœur) et diastolique (relâchement). Il permet de dépister l'hypertension artérielle.",
        "le saturomètre": "Aussi appelé oxymètre de pouls, il évalue instantanément la saturation en oxygène de l'hémoglobine dans le sang capillaire et surveille la fréquence cardiaque.",
        "l'échographe portable": "Grâce aux ultrasons et sans aucune radiation, il permet aux médecins de réaliser des examens d'imagerie rapides directement au chevet du patient ou en médecine d'urgence.",
        "l'automate d'hématologie": "C'est le pilier des laboratoires d'analyses. Il réalise l'hémogramme complet (NFS) en quelques minutes pour détecter les anémies, infections ou leucémies.",
        "système de radiographie": "Utilisant les rayons X, il reste l'examen de référence pour l'imagerie osseuse (fractures) et pulmonaire (pneumonies, suivi thoracique)."
    };

    // Création dynamique de la structure de la fenêtre modale dans le HTML
    const modal = document.createElement("div");
    modal.className = "custom-modal";
    modal.innerHTML = 
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3 id="modal-title">Titre de l'outil</h3>
            <p id="modal-text">Description détaillée...</p>
        </div>
    ;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close-modal");

    // Écouteur de clic sur tous les boutons "En savoir plus"
    document.querySelectorAll(".card-link").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            // Récupère le titre de la carte parente
            const card = button.closest(".card-item") || button.parentElement;
            const titleText = card.querySelector("h3").innerText.trim();
            
            // Remplit et affiche la modale
            modalTitle.innerText = titleText;
            modalText.innerText = outilsDetails[titleText.toLowerCase()] || "Aucune description supplémentaire disponible pour le moment.";
            modal.classList.add("modal-show");
        });
    });

    // Fermeture de la modale
    closeModal.addEventListener("click", () => modal.classList.remove("modal-show"));
    window.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("modal-show"); });


    // --- 2. GESTION DU MENU BURGER MOBILE ---
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            menuToggle.innerHTML = nav.classList.contains("nav-active") ? "✕" : "☰";
        });
    }


    // --- 3. GESTION DU MODE SOMBRE / LUMINEUX ---
    const themeToggle = document.querySelector(".theme-toggle");
    
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeToggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀️🌙" : "❤️";
        });
    }
});