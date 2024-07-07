export default function esMayorDeEdad(campo) {
    const fechaNaciemiento = new Date(campo.value)
    // console.log(fechaNaciemiento)
    // validarEdad(fechaNaciemiento)
    // console.log(validarEdad(fechaNaciemiento))
    if (!validarEdad(fechaNaciemiento)) {
        campo.setCustomValidity("Necesitas ser mayor de edad")
    }
}

function validarEdad(fecha) {
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate())

    return fechaActual >= fechaMas18
}
