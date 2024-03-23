import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from '@/entity/book.entity';
import { BookService } from './book.service';
import { AuthorEntity } from '@/entity/author.entity';
import { AuthorService } from '../author/author.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  providers: [BookService, BookResolver, AuthorService],
  exports: [BookService],
})
export class BookModule {}
