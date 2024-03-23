import { Module } from '@nestjs/common';
import { GraphQLModule as GQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

@Module({
  imports: [
    GQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.graphql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export default class GraphQLModule {}
