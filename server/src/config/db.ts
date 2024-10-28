// Importaciones
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"

// Accedemos a las variables de entorno
dotenv.config()

// Creamos la conexion a la base de datos
const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + '/../models/**/*.ts'],
});

// Exportamos nuestra BD
export default db