import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDealTable1627890220910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`deals\` (
                \`id\` INT NOT NULL AUTO_INCREMENT,
                \`title\` VARCHAR(60) NOT NULL,
                \`date\` INT NOT NULL,
                \`amount\` INT NOT NULL,
                \`type\` VARCHAR(45) NOT NULL,
                PRIMARY KEY(\`id\`)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE IF EXISTS deals;`
        );
    }

}
