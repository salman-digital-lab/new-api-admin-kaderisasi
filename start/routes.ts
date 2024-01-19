import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/:id', 'ProfilesController.show')
    Route.get('/', 'ProfilesController.index')
    Route.put('/:id', 'ProfilesController.update')
  }).prefix('/profile')
}).prefix('/v2')
