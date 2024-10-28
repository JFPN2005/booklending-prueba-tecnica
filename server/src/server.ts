// Importaciones
import colors from "colors"
import express from "express"
import cors from "cors"
import { corsConfig } from "./config/cors"
import morgan from "morgan"
import userRouter from "./routes/userRouter"
import db from "./config/db"
import bookRouter from "./routes/bookRouter"
import historyPossessionsRouter from "./routes/historyPossessionsRouter"

// Nos conectamos a la BD
async function connectDB() {
  try {
    // Autenticamos al usuario
    await db.authenticate()
    // Sincronizamos cada cambio que hagamos a nuesta BD
    db.sync()
    console.log(colors.blue.bold("La conexion a la BD a sido exitosa"))
  } catch (error) {
    console.log(colors.red.bold("Hubo un error al conectar la BD"))
  }
}

connectDB()

// Creamos nuestro servidor con express
const server = express()

// Permitir conexiones externas con CORS
server.use(cors(corsConfig))

// leer datos formulario
server.use(express.json())

// Verificamos las petiones en nuestra terminal
server.use(morgan('dev'))

/* === RUTAS === */
// Rutas de Login
server.use('/', userRouter)
// Rutas de Administrar libro
server.use('/', bookRouter)
// Rutas para Historial de posesiones
server.use('/', historyPossessionsRouter)


// Exportamos nuestro servidor
export default server