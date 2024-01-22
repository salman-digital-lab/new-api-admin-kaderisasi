import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Province from './Province'

export default class City extends BaseModel {
  public static table = 'region_cities'

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
}
