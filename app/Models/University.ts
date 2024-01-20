import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class University extends BaseModel {
  public static table = 'universities'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
}
