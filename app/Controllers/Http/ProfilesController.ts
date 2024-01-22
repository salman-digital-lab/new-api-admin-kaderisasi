import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PublicUser from 'App/Models/PublicUser'
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
        .preload('publicUser')
        .preload('university')
        .preload('role')
        .orderBy('name', 'asc')
        .paginate(page, perPage)

      return response.ok({
        messages: 'GET_DATA_SUCCESS',
        data: profiles,
      })
    } catch (error) {
      return response.internalServerError({
        message: 'GENERAL_ERROR',
        error: error.message,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const id: number = params.id
      const userData = await PublicUser.find(id)
      const profile = await Profile.query()
        .select('*')
        .where('user_id', id)
        .preload('university')
        .preload('role')
        .preload('province')
        .preload('city')

      return response.ok({
        message: 'GET_DATA_SUCCESS',
        data: { userData, profile },
      })
    } catch (error) {
      return response.internalServerError({
        message: 'GENERAL_ERROR',
        error: error.message,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(ProfileValidator)
      const id: number = params.id
      const profile = await Profile.findByOrFail('user_id', id)
      const updated = await profile.merge(payload).save()

      return response.ok({
        message: 'UPDATE_DATA_SUCCESS',
        data: updated,
      })
    } catch (error) {
      return response.internalServerError({
        message: 'GENERAL_ERROR',
        error: error.message,
      })
    }
  }
}
