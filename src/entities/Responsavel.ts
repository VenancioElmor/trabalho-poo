// Entidade representa a tabela no programa.
// Entity faz referência a tabela.
// CreateDateColumn Referencia o campo created_at
// UpdateDateColumn Referencia o campo updated_at
// PrimaryColumn representa o campo de chave primária da tabela
// Column representa os campos da tabela

import {Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column} from 'typeorm' 
import {v4 as uuid} from 'uuid'  // Importando o uuid

@Entity('responsaveis')
class Responsavel {
    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    telefone: string;  
   
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    // Constructor, gera o ID automaticamente 
    constructor () {
        if (!this.id) {
            this.id = uuid()
        }
    
    }
}


export {Responsavel}