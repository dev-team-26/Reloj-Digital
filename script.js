let reloj = document.getElementById("reloj");
let horaAnterior = null;

    function lanzarConfeti() {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    function actualizarReloj() {
      const ahora = new Date();
      const horas = ahora.getHours().toString().padStart(2, "0");
      const minutos = ahora.getMinutes().toString().padStart(2, "0");
      const segundos = ahora.getSeconds().toString().padStart(2,"0");

      reloj.textContent = `${horas}:${minutos}:${segundos}`;

      if (horaAnterior !== null && ahora.getMinutes() !== horaAnterior) {
        reloj.classList.add("animar");
        lanzarConfeti();

        setTimeout(() => reloj.classList.remove("animar"), 1000);
      }

      horaAnterior = ahora.getMinutes();
    }

    setInterval(actualizarReloj, 1000);
    actualizarReloj();