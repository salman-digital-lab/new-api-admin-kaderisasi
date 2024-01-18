import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import University from './University'
import Province from './Province'
import Regency from './Regency'
import Role from './Role'
import User from './PublicUser'

export default class Profile extends BaseModel {
  public static table = 'profiles'

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public phone: string

  @column()
  public line_id: string

  @column()
  public instagram: string

  @column()
  public province_id: number

  @column()
  public regency_id: number

  @column.date()
  public date_of_birthday: DateTime

  @column()
  public city_of_birth: string

  @column()
  public address: string

  @column()
  public university_id: number

  @column()
  public faculty: string

  @column()
  public major: string

  @column()
  public student_id: number

  @column()
  public intake_year: string

  @column()
  public role_id: number

  @column()
  public ssc: number

  @column()
  public lmd: number

  @column()
  public komprof: number

  @column()
  public spectra: number

  @column()
  public is_subscribing: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => University)
  public university: HasOne<typeof University>

  @hasOne(() => Province)
  public province: HasOne<typeof Province>

  @hasOne(() => Regency)
  public regency: HasOne<typeof Regency>

  @hasOne(() => Role)
  public role: HasOne<typeof Role>
}
