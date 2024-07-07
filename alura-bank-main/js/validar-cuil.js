export default function esUnCuil(campo) {
  const cuil = campo.value.replace(/[-\/]/g, "");
  tieneNumerosRepetidos(cuil);
  validarPrimerosDigotos(cuil)
//   console.log(cuil);
//   console.log(tieneNumerosRepetidos(cuil));
}

function tieneNumerosRepetidos(cuil) {
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numerosRepetidos.includes(cuil);
}

function validarPrimerosDigotos(cuil) {
  let primerosDigitos = cuil.substr(0, 2);
  let digitosValidos.includes(primerosDigitos)
}
