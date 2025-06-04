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

  errorMsg.style.display = "none";
  document.getElementById("formulari-acces").style.display = "none";
  document.getElementById("contingut").style.display = "block";
  return false; 
}

function canviaImatge(ruta) {
  document.getElementById('imatgeGran').src = ruta;
}



