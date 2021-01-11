'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DB=use('Database')
const Hash=use('Hash')

class UserSeeder {
  async run () {

    const usersArray = await Factory
    .model('App/Models/Usuario')
    .createMany(20)

    /*await DB.table('usuarios').insert([
      {
        nombre:'angel',
        correo:'angel@gmail.com',
        password:await Hash.make('12345')
      },
      {
        nombre:'abraham',
        correo:'abraham@gmail.com',
        password:await Hash.make('12345')
      }
    ])*/
  }
  
}

module.exports = UserSeeder
