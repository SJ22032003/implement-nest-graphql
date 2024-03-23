import { Module } from '@nestjs/common';
import { BookModule } from './book/index.module';
import { AuthorModule } from './author/index.module';

@Module({
  imports: [BookModule, AuthorModule],
  controllers: [],
  providers: [],
})
export default class PrivateInitModule {}
