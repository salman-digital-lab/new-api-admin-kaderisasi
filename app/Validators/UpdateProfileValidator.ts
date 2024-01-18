import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    gender: schema.string(),
    phone: schema.string(),
    line_id: schema.string(),
    instagram: schema.string(),
    date_of_birthday: schema.date(),
    city_of_birth: schema.string(),
    province_id: schema.number(),
    regency_id: schema.number(),
    address: schema.string(),
    university_id: schema.number(),
    intake_year: schema.number(),
    faculty: schema.string(),
    major: schema.string(),
    student_id: schema.string(),
    is_subscribing: schema.boolean(),
    role_id: schema.number(),
  })

  public messages: CustomMessages = {}
}
