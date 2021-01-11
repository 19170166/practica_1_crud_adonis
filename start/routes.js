'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('/user','UserController.index').middleware(['checkuser'])
Route.post('/agregar/usuario','UserController.insert').middleware(['checkedad'])
Route.get('/ver/usuario/:id','UserController.select').middleware(['checkuser'])
Route.delete('/borrar/usuario/:id','UserController.delete').middleware(['checkuser'])
Route.put('/modificar/usuario/:id','UserController.update').middleware(['checkusuario'])