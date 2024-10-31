import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: 'historyPossessions'
})

class HistoryPossession extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  declare id_book: number

  @Column({
    type: DataType.STRING(100)
  })
  declare book: string

  @Column({
    type: DataType.STRING(100)
  })
  declare client: string

  @Column({
    type: DataType.BIGINT
  })
  declare idCard: number

  @Column({
    type: DataType.BIGINT
  })
  declare phone: number

  @Column({
    type: DataType.DATE
  })
  declare orderDate: Date

  @Column({
    type: DataType.DATE
  })
  declare returnDate: Date
}

export default HistoryPossession