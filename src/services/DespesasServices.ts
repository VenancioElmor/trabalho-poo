import { getCustomRepository } from "typeorm";
import { DespesasController } from "../controllers/DespesasController";
import {DespesasRepository} from '../repositories/DespesasRepository' // É preciso importar o Repository

// Interface de Criação de Despesas. 
interface IDespesasCreate {
    datadacompra: Date;
    localdacompra: string;
    valor: number;
    id_responsavel: string;
}

interface IDespesasID {
    id:string;
}

interface IDespesasUpdate {
    id: string;
    datadacompra: Date;
    localdacompra: string;
    valor: number;
    id_responsavel: string;
}

class DespesasServices { 

    async create({datadacompra, localdacompra, valor, id_responsavel}: IDespesasCreate) { // Informações que serão recebidas. 
        const despesasRepository = getCustomRepository(DespesasRepository) // Acesso aos comandos para manipular o BD.

        const despesas = despesasRepository.create({
            datadacompra,
            localdacompra,
            valor,
            id_responsavel
        })

        await despesasRepository.save(despesas)
        return despesas

    }

    async index() {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = despesasRepository.find({
            relations: ['responsavel']
        })
        return despesas
    }

    async show({id}: IDespesasID) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne(id, {
            relations: ['responsavel']
        })
        return despesas

    }

    async delete({id}: IDespesasID) {
        const despesasRepository = getCustomRepository(DespesasRepository)
        const despesas = await despesasRepository.findOne({id})

        if (!despesas) {
            throw new Error('ID não existe !!')
        }
        return await despesasRepository.delete({id})
    }

   async update({id,datadacompra, localdacompra, valor, id_responsavel}: IDespesasUpdate) {
        const despesasRepository = getCustomRepository(DespesasRepository)
        
        let verificarid = await despesasRepository.findOne({id}) 
        if (!verificarid) {
            throw new Error("ID não encontrado !!") }

            const despesasUpdate = despesasRepository.update(id,{
                datadacompra,
                localdacompra,
                valor,
                id_responsavel
            })
            verificarid = await despesasRepository.findOne(id)
            return verificarid
        }
        


   }





export {DespesasServices}