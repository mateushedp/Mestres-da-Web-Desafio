import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from '../../database/models/User';

export class CreateAdminUser1607525622871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const repository = getRepository(User);
        const user = new User();
        user.id = 1;
        user.name = "Admin";
        user.password = "admin123";
        user.email = "admin@gmail.com";
        user.role = true;
        await repository.save(user);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
