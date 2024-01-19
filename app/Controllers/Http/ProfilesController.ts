import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/PublicUser'
import Profile from 'App/Models/Profile'
import ProfileValidator from 'App/Validators/UpdateProfileValidator'

export default class ProfilesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.qs().page ?? 1
      const perPage = request.qs().per_page ?? 10
      const search = request.qs().search

      const profiles = await Profile.query()
        .select('*')
        .where('name', 'ILIKE', search ? '%' + search + '%' : '%%')
        .preload('user')
        .preload('university')
        .preload('role')
        .orderBy('name', 'asc')
        .paginate(page, perPage)

      return response.ok({
        status: 'success',
        messages: 'Get all profiles data success',
        data: profiles,
      })
    } catch (error) {
      return response.internalServerError({
        status: error.status,
        message: 'Get all profiles data failed',
        error: error.message,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const id: number = params.id
      const userData: any = await User.find(id)
      const profile: any = await Profile.query()
        .select('*')
        .where('user_id', id)
        .preload('university')
        .preload('role')
        .preload('province')
        .preload('regency')

      return response.ok({
        status: 'success',
        message: 'Get user profile success',
        data: { userData, profile },
      })
    } catch (error) {
      return response.internalServerError({
        status: error.status,
        message: 'Get user profile failed',
        error: error.message,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const payload: any = await request.validate(ProfileValidator)
      const id: number = params.id
      const profile: any = await Profile.findByOrFail('user_id', id)
      const updated: any = await profile.merge(payload).save()

      return response.ok({
        status: 'success',
        message: 'Update user profile success',
        data: updated,
      })
    } catch (error) {
      return response.internalServerError({
        status: error.status,
        message: 'Update user profile failed',
        error: error.message,
      })
    }
  }
}
