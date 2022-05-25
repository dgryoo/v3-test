import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: 'test',
    database: 'dalchaebi',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}