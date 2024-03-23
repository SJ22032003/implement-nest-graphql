import { Module } from '@nestjs/common';
import DatabaseModule from './database/index.module';
import GraphQLModule from './graphql/index.module';
import PrivateInitModule from './private/init.module';

@Module({
  imports: [DatabaseModule, GraphQLModule, PrivateInitModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
