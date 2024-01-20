import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Province extends BaseModel {
  public static table = 'region_provinces'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
}
