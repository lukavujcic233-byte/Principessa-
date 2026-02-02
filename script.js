const oggi = new Date().getDate();
const totaleFoto = 4;
let indice = {};

document.querySelectorAll('.casella').forEach(c => {
  const giorno = parseInt(c.dataset.day);
  if (giorno > oggi) c.classList.add('bloccata');
});

function apriGiorno(n) {
  if (oggi >= n) {
    indice[n] = 1;
    document.getElementById('giorno' + n).style.display = 'block';
  }
}

function chiudi() {
  document.querySelectorAll('.modale').forEach(m => m.style.display = 'none');
}

function cambiaFoto(dir, giorno) {
  indice[giorno] += dir;
  if (indice[giorno] < 1) indice[giorno] = totaleFoto;
  if (indice[giorno] > totaleFoto) indice[giorno] = 1;

  document.getElementById('foto' + giorno).src =
    `immagini/giorno${String(giorno).padStart(2,'0')}/${indice[giorno]}.jpg`;
}
