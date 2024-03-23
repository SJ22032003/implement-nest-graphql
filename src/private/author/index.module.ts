import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '@/entity/author.entity';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { BookService } from '../book/book.service';
import { BookEntity } from '@/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  providers: [AuthorService, AuthorResolver, BookService],
  exports: [AuthorService],
})
export class AuthorModule {}
