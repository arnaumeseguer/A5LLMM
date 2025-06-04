document.addEventListener("DOMContentLoaded", function () {
    // Rellotge: Mostra el temps que l'usuari ha estat a la pàgina
    const rellotge = document.getElementById("rellotge");
    if (rellotge) {
        const iniciTemps = Date.now();
        setInterval(() => {
            const tempsPassat = Math.floor((Date.now() - iniciTemps) / 1000); // En segons
            const minuts = Math.floor(tempsPassat / 60);
            const segons = tempsPassat % 60;
            rellotge.textContent = `Temps a la pàgina: ${minuts} min ${segons} s`;
        }, 1000);
    }

    // Gestió de la imatge gran
    const imatgeGran = document.getElementById("imatgeGran");
    if (imatgeGran) {
        imatgeGran.style.opacity = "0";

        const miniatures = document.querySelectorAll(".miniatures img");
        miniatures.forEach(function (miniatura) {
            miniatura.addEventListener("click", function () {
                imatgeGran.style.opacity = "0";
                setTimeout(() => {
                    imatgeGran.src = this.src.replace("miniatura", "gran");
                    imatgeGran.style.opacity = "1";
                }, 500);
            });
        });
    }

    
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionem el contenidor del modal i la imatge gran
    const overlay = document.getElementById("overlay");
    const expandedImage = document.getElementById("expanded-image");

    // Afegim un event listener a totes les miniatures
    const miniatures = document.querySelectorAll(".miniatures-fixed img");
    miniatures.forEach(function (miniatura) {
        miniatura.addEventListener("click", function () {
            // Mostra la capa enfosquida i col·loca la imatge clicada
            overlay.classList.remove("hidden");
            expandedImage.src = this.src; // Usa la mateixa font que la miniatura
        });
    });

    // Quan es clica fora de la imatge ampliada, torna a ocultar-se
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.add("hidden");
        }
    });
});});
