import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DB_ORM_CONFIG from './orm.config';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(DB_ORM_CONFIG)],
})
export default class DatabaseModule {}
