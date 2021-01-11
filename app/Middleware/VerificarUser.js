'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const us=use('App/Models/Usuario')
class VerificarUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response }, next) {
    const u=request.post()
    const user=await us.findBy('correo',u.correo)

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

module.exports = VerificarUser
