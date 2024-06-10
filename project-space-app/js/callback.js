function uno(dos) {
  console.log("Uno");
  //   dos()
  setTimeout(dos, 2000);
}

function dos(tres) {
  console.log("Dos");
  setTimeout(tres, 2000);
}

function tres(cuatro) {
  console.log("Tres");
  setTimeout(cuatro, 2000);
}

function cuatro(cinco) {
  console.log("Cuatro");
  setTimeout(cinco, 2000);
}

function cinco() {
  console.log("Cinco");
}

setTimeout(
    () => uno(
        () => dos(
            () => tres(
                () => cuatro(cinco)))), 5000);

// const nombre = function () {
//   console.log("Nombre");
// };

// nombre();

// const persona = () => console.log("F Code");

// persona();

// () => console.log("Hello World");
