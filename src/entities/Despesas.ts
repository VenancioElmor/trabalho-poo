import {Entity,PrimaryColumn,CreateDateColumn,UpdateDateColumn,Column, JoinColumn, ManyToOne} from 'typeorm'
import { ResponsaveisController } from '../controllers/ResponsaveisController';
import {Responsavel} from './Responsavel'
import {v4 as uuid} from 'uuid'


@Entity('despesas')
class Despesas {

@PrimaryColumn()
id: string;

@JoinColumn({name: 'id_responsavel'})      // Coluna de Relação
@ManyToOne(() => Responsavel)  // Muitas despesas para 1 Responsável
responsavel: Responsavel;

@Column()
id_responsavel: string;

@Column()
valor: number;

@Column()
datadacompra: Date;

@Column()
localdacompra: string;

@CreateDateColumn()
created_at: Date;

@UpdateDateColumn()
updated_at: Date;

constructor() {
    if (!this.id) {
        this.id = uuid()
    }
}

}

export {Despesas}
