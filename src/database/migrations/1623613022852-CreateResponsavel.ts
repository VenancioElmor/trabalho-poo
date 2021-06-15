import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResponsavel1623613022852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: "responsaveis",
                    columns: [
                        {
                            name: "id",     //  Nome do campo da tabela.
                            type: "uuid",   //  O tipo dele, que será gerado automaticamente.
                            isPrimary: true  // Será chave Primária. 
                        },
                        {
                            name: "nome",
                            type: "varchar"
                        },
                        {
                            name: "telefone",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("responsaveis")
    }

}
