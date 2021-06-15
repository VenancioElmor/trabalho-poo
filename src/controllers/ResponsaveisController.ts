import {Request, Response} from 'express'
import {ResponsaveisServices} from '../services/ResponsaveisServices'

class ResponsaveisController {
    
    
    async create(request: Request, response: Response) {          // Método create    
        const {nome, telefone} = request.body // Passando as informações que estão indo na Rota. 
        const responsaveisServices = new ResponsaveisServices() // Instanciando a classe Services que foi importado.
        const responsaveis =  await responsaveisServices.create({nome, telefone}) // Chama o método create do SERVICE, passando um objeto com o nomedoresponsavel e telefone.
        return response.json(responsaveis)
    }

    async index(request: Request, response:Response) {
        const responsaveisServices = new ResponsaveisServices()
       
        try {
        const responsaveis = await responsaveisServices.index()
        return response.json(responsaveis)
        } catch (err) {
            return response
                .status(400)
                .json({message:err.message})
        }
        

    }

}

export {ResponsaveisController}