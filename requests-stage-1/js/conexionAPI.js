const urlApi = "http://localhost:3001/videos";

async function listarVideos() {
  const conexion = await fetch(urlApi);
  const conexionConvertida = await conexion.json();

  // console.log(conexionConvertida)\
  return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
  const conexion = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descripcion: `${descripcion} mil visualizaciones`,
      url: url,
      imagen: imagen,
    }),
  });

  const conexionConvertida = conexion.json();

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el video :(")
  }

  return conexionConvertida;
}

async function buscarVideos(palabraClave) {
  const conexion = await fetch(`${urlApi}?q=${palabraClave}`);
  console.log(conexion)
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

export const conexionAPI = {
  listarVideos,
  enviarVideo,
  buscarVideos,
};
