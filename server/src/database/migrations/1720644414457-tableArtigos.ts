import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class TableArtigos1720644414457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'artigos',
          columns: [
            new TableColumn({
              name: 'id',
              type: "varchar",
              isPrimary: true,
              generationStrategy: "uuid"
            }),
            new TableColumn({
              name: 'artigo',
              type: 'longblob',
              isNullable: false,
            }),
            new TableColumn({
              name: 'usuario_id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: "uuid"
            })
          ],

          foreignKeys: [
            {
              name: 'fk_usuario_id',
              referencedTableName: 'usuarios',
              referencedColumnNames: ['id'],
              columnNames: ['usuario_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('artigos')
    }

}
