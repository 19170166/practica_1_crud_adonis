'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const usuario=use('App/Models/Usuario')
const bd=use('Database')
class VerificarEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response }, next) {
    
    if(request.post().edad>18){
      await next()
    }
    else {
      return response.json({
        mensaje:"No es mayor de edad"
      }) 
    }
  }
}

module.exports = VerificarEdad
