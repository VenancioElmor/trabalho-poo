import {ResponsaveisRepository} from '../repositories/ResponsaveisRepository'
import {getCustomRepository} from 'typeorm'



// Interface que irá receber o nomedoresponsavel e o telefone. 
interface IResponsaveisCreate {
    nome: string;
    telefone: string;
}

class ResponsaveisServices {

// Cria os responsáveis pelo gasto.  
async create({ nome, telefone}: IResponsaveisCreate) {    // Desestruturando da interface o nomedoresponsavel e o telefone. 
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository) // Variável responsaveisRepository irá ter acesso as informações do Repository
    const responsaveis = responsaveisRepository.create({
        telefone,
        nome
        
    })
    await responsaveisRepository.save(responsaveis)
    return responsaveis
}

// Irá Listar todos os responsáveis pelos gastos. 
async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)
    const responsaveis = await responsaveisRepository.find()
    return responsaveis
}

}

export {ResponsaveisServices}