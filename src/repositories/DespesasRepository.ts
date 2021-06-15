import {Entity, EntityRepository, Repository} from 'typeorm'
import {Despesas} from '../entities/Despesas' // Importanto a Entidade Despesas. 

@EntityRepository(Despesas)
class DespesasRepository extends Repository<Despesas> {
    
}

export {DespesasRepository}