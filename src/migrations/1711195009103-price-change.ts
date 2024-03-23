import {MigrationInterface, QueryRunner} from "typeorm";

export class priceChange1711195009103 implements MigrationInterface {
    name = 'priceChange1711195009103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "price" numeric(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "price" integer NOT NULL`);
    }

}
