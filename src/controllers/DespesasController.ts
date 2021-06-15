import {Request, response, Response} from 'express'
import {DespesasServices} from '../services/DespesasServices'

class DespesasController {

    async create(request: Request, response: Response)  {
        
         let {datadacompra, localdacompra, valor, id_responsavel} = request.body
        datadacompra = new Date(datadacompra)
        // const {datadacompra, localdacompra, valor, id_responsavel} = request.body
        const despesasServices = new DespesasServices() // Instanciando a classse DespesasServices
        
        try{ 
        const despesas = await despesasServices.create({datadacompra, localdacompra, valor, id_responsavel})
        return response.json(despesas)
        } catch (err) {
            return response
                .status(400)
                .json({message:err.message})
        }
    }
// Letra D) Listar todas as despesas. Data está dando NULL - VERIFICAR 
    async index(request: Request, response: Response) {
        const despesasServices = new DespesasServices()
        try {
            const despesas = await despesasServices.index()
            return response.json(despesas)
        } catch(err) {
            return response
                .status(400)
                .json({message:err.message})
        }
    }
    // Listar as Despesas Pelo ID 
    async show(request: Request, response: Response) {
        const despesasServices = new DespesasServices()
        const {id} = request.params
        try { 
            const despesas = await despesasServices.show({id})
            return response.json(despesas)
        } catch(err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }
    // Deletar as Despesas pelo ID. 
    async delete(request: Request, response: Response) {
        const despesasServices = new DespesasServices()
        const {id} = request.params

        try{
            const despesas = await despesasServices.delete({id})
            return response.json({message: 'ID Deletado com Sucesso !!'})
        }   catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    // Alterar os Gastos pelo ID

    async update(request: Request, response: Response) {
        const {datadacompra, localdacompra, valor, id_responsavel} = request.body
        // datadacompra = new Date(datadacompra)
        const {id} = request.params
        
        const despesasServices = new DespesasServices()

        try {
            const despesas = await despesasServices.update({
                id, datadacompra, localdacompra, valor, id_responsavel
            })
            return response.json(despesas)
        } catch (err) {
            return response
               .status(400)
               .json({message: err.message})

        
    
    }
}
}   

export {DespesasController}

