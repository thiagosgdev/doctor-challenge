import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoctor1641833041812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "doctors",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "120"
                    },
                    {
                        name: "crm",
                        type: "int",
                        length: "7"
                    },
                    {
                        name: "phone_home",
                        type: "varchar",
                    },
                    {
                        name: "phone_mobile",
                        type: "varchar",
                    },
                    {
                        name: "zip_code",
                        type: "varchar",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "int",
                    },
                    {
                        name: "complement",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "district",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                        length: "2"
                    },
                    {
                        name: "speciality_codes",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("doctors");
    
    }

}
