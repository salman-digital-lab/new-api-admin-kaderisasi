import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    gender: schema.enum.optional(['M', 'F'] as const),
    phone: schema.string(),
    line_id: schema.string(),
    instagram: schema.string(),
    date_of_birthday: schema.date(),
    city_of_birth: schema.string(),
    province_id: schema.number(),
    regency_id: schema.number(),
    address: schema.string(),
    university_id: schema.number(),
    intake_year: schema.string(),
    faculty: schema.string(),
    major: schema.string(),
    student_id: schema.string(),
    is_subscribing: schema.number(),
    role_id: schema.number(),
  })

  public messages: CustomMessages = {}
}
