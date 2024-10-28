import { Table, Column, Model, DataType } from "sequelize-typescript";

// Creamos la tabla usuario
@Table({
  tableName: 'users'
})

// Creamos las columnas y atributos de nuestra tabla
class User extends Model {
  @Column({
    type: DataType.STRING(20)
  })
  declare user_name: string

  @Column({
    type: DataType.STRING(65)
  })
  declare password: string
}

export default User