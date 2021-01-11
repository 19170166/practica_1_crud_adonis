'use strict'

const User=use('App/Models/Usuario')
const Hash=use('Hash')
class UserController {

    
    async index ({response}){
        const users = await User.all()
        
        response.status(200).json({
            mensaje:"usuarios",
            datos:users
        })
    }

    async insert({request,response}){
        //const userData=request.only(['nombre','correo','password','edad'])
        const userData=new User()
        const data=request.post()
        userData.nombre=data.nombre
        userData.correo=data.correo
        userData.password=await Hash.make(data.password)
        userData.edad=data.edad
        if(await userData.save()){
            return response.json({
                data:userData
            })
        }
        else{
            return response.json({
                aviso:"Error al guardar el usuario"
            })
        }
        
    }

    async select({request,response,params}){
        const us=await User.find(params.id)
        return response.json({
            data:us
        })
    }

    async update({request,response,params}){
        const us=await User.find(params.id)
        us.merge(request.post())
        
        if(await us.save()){
            response.json({
                data:us
            })
        }
        else{
            return response.json({
                aviso:"Error al modificar el usuario"
            })
        }
    }

    async delete({request,response,params}){
        const us=await User.find(params.id)
        await us.delete()
        return response.json({
            data:us
        })
    }


}

module.exports = UserController
