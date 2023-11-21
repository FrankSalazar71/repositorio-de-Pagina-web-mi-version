/**el scrip de la carga de pantalla */

const loadingOverlay = document.getElementById('loadingOverlay');


window.addEventListener('load', function() {
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 1000);
});
