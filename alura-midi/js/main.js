function playSonido(idELementoAudio) {
  document.querySelector(idELementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

// ---------------BUCLE FOR--------------- //
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#sonido_${instrumento}`;
  tecla.onclick = () => playSonido(idAudio);
  tecla.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
        tecla.classList.add("activa")
    }
  };
  tecla.onkeyup = () => tecla.classList.remove("activa");
}

// ---------------BUCLE WHILE--------------- //
// let contador = 0;
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#sonido_${instrumento}`;

//   tecla.onclick = () => playSonido(idAudio);
//   contador++;
// }
