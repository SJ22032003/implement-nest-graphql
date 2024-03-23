import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'library_manager',
  password: '123',
  database: 'library_management',
  synchronize: false,
  logging: true,
  entities: [join(__dirname + '/../' + '**/*.entity{.ts,.js}')],
  migrations: [join(__dirname + '/../' + 'migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as TypeOrmModuleOptions;
