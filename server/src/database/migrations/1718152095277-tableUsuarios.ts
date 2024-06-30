import { Column, MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";


export class TableUsuarios1718152095277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "usuarios",
          columns: [
            new TableColumn({
              name: "id",
              type: "varchar",
              isPrimary: true,
              generationStrategy: "uuid"
            }),
            new TableColumn({
              name: "nome",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "cpf",
              type: "char(11)",
              isNullable: false
            }),
            new TableColumn({
              name: "data_nascimento",
              type: "date",
              isNullable: false
            }),
            new TableColumn({
              name: "genero",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "status",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "tipo",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "email",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "senha",
              type: "varchar",
              isNullable: false
            }),
            new TableColumn({
              name: "telefone",
              type: "varchar"
            })
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable("usuarios")
    }

}
