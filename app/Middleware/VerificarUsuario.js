'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User=use('App/Models/Usuario')
class VerificarUsuario {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response,params:{id} }, next) {
    const user=await User.find(id)
  
    if(!user){
      return response.json({
        mensaje:"Permiso denegado, no esta registrado"
      })
    }
    else{
      await next()
    }
  }
}

module.exports = VerificarUsuario
