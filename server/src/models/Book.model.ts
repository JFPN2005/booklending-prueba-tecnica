import { Column, DataType, Default, Model, Table } from "sequelize-typescript";

// Creamos la tabla de libros
@Table({
  tableName: 'books'
})

class Book extends Model {
  @Column({
    type: DataType.STRING(100)
  })
  declare name: string

  @Column({
    type: DataType.STRING(100)
  })
  declare category: string

  @Column({
    type: DataType.STRING(100)
  })
  declare author: string

  @Column({
    type: DataType.FLOAT
  })
  declare price: number

  @Default(true)
  @Column({
    type: DataType.BOOLEAN
  })
  declare availability: boolean
}

export default Book