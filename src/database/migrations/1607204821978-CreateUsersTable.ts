import { MigrationInterface, QueryRunner, Table, getRepository } from "typeorm";
import { User } from '../../database/models/User';


export class CreateUsersTable1607204821978 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    default: "1"
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "role",
                    type: "boolean",
                    default: "false"
                }
            ]
        }))

        // const repository = getRepository(User);
        // const user = new User();
        // user.id = 1;
        // user.name = "Admin";
        // user.password = "admin123";
        // user.email = "admin@gmail.com";
        // user.role = true;
        // await repository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
