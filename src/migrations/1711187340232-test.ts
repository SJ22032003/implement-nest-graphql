import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1711187340232 implements MigrationInterface {
  name = 'test1711187340232';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, "authorId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "books" DROP CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86"`,
    );
    await queryRunner.query(`DROP TABLE "authors"`);
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
