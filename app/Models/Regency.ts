import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Province from './Province'

export default class Regency extends BaseModel {
  public static table = 'region_regencies'

  @column({ isPrimary: true })
  public id: number

  @column()
  public provinceId: number

  @belongsTo(() => Province, {
    foreignKey: 'provinceId',
  })
  public province: BelongsTo<typeof Province>

  @column()
  public name: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
