// Importaciones
import colors from "colors"
import server from "./server"

// Asignamos el puerto donde se correra el servidor
const port = process.env.PORT || 4000

// Escuchamos por el puerto que se este ejecutando
server.listen(port, () => {
  console.log(colors.magenta.bold(`REST API funcionando en el puerto ${port}`))
})