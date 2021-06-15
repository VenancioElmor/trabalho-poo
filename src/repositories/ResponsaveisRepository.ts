// Repositório irá fazer a comunicação da entidade com o banco de dados
import {Repository, EntityRepository} from 'typeorm'
import {Responsavel} from '../entities/Responsavel'

@EntityRepository(Responsavel)
class ResponsaveisRepository extends Repository<Responsavel> {

}

export {ResponsaveisRepository}