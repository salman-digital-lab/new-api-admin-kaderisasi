import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import University from './University'
import Province from './Province'
import City from './City'
import Role from './Role'
import PublicUser from './PublicUser'

export default class Profile extends BaseModel {
  public static table = 'profiles'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @belongsTo(() => PublicUser, {
    foreignKey: 'userId',
  })
  public publicUser: BelongsTo<typeof PublicUser>

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public phone: string

  @column()
  public lineId: string

  @column()
  public instagram: string

  @column()
  public provinceId: number

  @belongsTo(() => Province, {
    foreignKey: 'provinceId',
  })
  public province: BelongsTo<typeof Province>

  @column()
  public cityId: number

  @belongsTo(() => City, {
    foreignKey: 'cityId',
  })
  public city: BelongsTo<typeof City>

  @column.date()
  public dateOfBirthday: DateTime

  @column()
  public city_of_birth: string

  @column()
  public address: string

  @column()
  public universityId: number

  @belongsTo(() => University, {
    foreignKey: 'universityId',
  })
  public university: BelongsTo<typeof University>

  @column()
  public faculty: string

  @column()
  public major: string

  @column()
  public studentId: number

  @column()
  public intakeYear: string

  @column()
  public roleId: number

  @belongsTo(() => Role, {
    foreignKey: 'roleId',
  })
  public role: BelongsTo<typeof Role>

  @column()
  public ssc: number

  @column()
  public lmd: number

  @column()
  public komprof: number

  @column()
  public spectra: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
