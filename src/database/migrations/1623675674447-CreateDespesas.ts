import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDespesas1623675674447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "despesas",
                columns: [
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"id_responsavel",
                        type: "uuid"
                    },
                    {
                        name: "valor",
                        type: "number"
                    },
                    {
                        name: "localdacompra",
                        type: "varchar"
                    },
                    {
                        name: "datadacompra",
                        type: "Date"
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
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKResponsavel",  // Tabela referenciada
                        referencedTableName: "responsaveis", // Nome da tabela referenciada 
                        referencedColumnNames: ["id"],      // Coluna referenciada 
                        columnNames: ["id_responsavel"],    // nome da coluna dessa tabela que será feita a relação
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("despesas")
    }

}
