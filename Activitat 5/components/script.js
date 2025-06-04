// Rellotge que mostra el temps a la pàgina
function iniciaRellotge() {
  let segons = 0;
  const rellotge = document.getElementById("rellotge");

  setInterval(() => {
    segons++;
    const minuts = Math.floor(segons / 60);
    const secs = segons % 60;
    rellotge.textContent = `${minuts.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// Executa quan tot estigui carregat
document.addEventListener("DOMContentLoaded", () => {
  iniciaRellotge();
});

function resaltarSeccio() {
  const seccio = document.getElementById("Minecraft");
  const paragraf = document.getElementById("paragrafOcult");

  seccio.classList.add("resaltat");
  paragraf.style.display = "block";
}

function restaurarSeccio() {
  const seccio = document.getElementById("Minecraft");
  const paragraf = document.getElementById("paragrafOcult");

  seccio.classList.remove("resaltat");
  paragraf.style.display = "none";
}

function desbloquejarContingut() {
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;
  const errorMsg = document.getElementById("missatge-error");

  if (pass1.length < 8) {
    errorMsg.textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
    errorMsg.style.display = "block";
    return false;
  }

  if (pass1 !== pass2) {
    errorMsg.textContent = "Les contrasenyes no coincideixen.";
    errorMsg.style.display = "block";
    return false;
  }

  // Tot correcte, mostra el contingut
  errorMsg.style.display = "none";
  document.getElementById("formulari-acces").style.display = "none";
  document.getElementById("contingut").style.display = "block";
  return false; // Evita el reload del formulari
}

function canviaImatge(ruta) {
  document.getElementById('imatgeGran').src = ruta;
}



