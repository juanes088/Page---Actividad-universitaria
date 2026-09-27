// modo oscuro
(function () {
  var CLAVE = "tema";
  var raiz = document.documentElement;

  // cargar el tema guardado
  try {
    var guardado = localStorage.getItem(CLAVE);
    if (guardado) {
      raiz.setAttribute("data-theme", guardado);
    }
  } catch (e) {}

  function esOscuro() {
    return raiz.getAttribute("data-theme") === "dark";
  }

  // cambia el icono del boton
  function actualizarBoton() {
    var boton = document.getElementById("toggle-tema");
    if (!boton) return;
    boton.textContent = esOscuro() ? "☀" : "☾"; // sol / luna
    boton.setAttribute(
      "aria-label",
      esOscuro() ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    actualizarBoton();
    var boton = document.getElementById("toggle-tema");
    if (!boton) return;
    boton.addEventListener("click", function () {
      var nuevo = esOscuro() ? "light" : "dark";
      raiz.setAttribute("data-theme", nuevo);
      try {
        localStorage.setItem(CLAVE, nuevo);
      } catch (e) {}
      actualizarBoton();
    });
  });
})();
