import { HttpStatus, Injectable } from '@nestjs/common';
import { BookEntity } from '@/entity/book.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookInput } from './dto';
import { AuthorService } from '../author/author.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,
    private readonly authorService: AuthorService,
  ) {}

  async getAllBooks(
    query: FindManyOptions<BookEntity> = {},
  ): Promise<BookEntity[]> {
    return this.bookRepo.find(query);
  }

  async getBookById(query: FindOneOptions): Promise<BookEntity> {
    return this.bookRepo.findOne(query);
  }

  async createBook(book: CreateBookInput): Promise<BookEntity> {
    const author = await this.authorService.getAuthor(book.author);
    if (!author) {
      throw new GraphQLError('Author not found', {
        extensions: { code: HttpStatus.NOT_FOUND },
      });
    }

    const newBookInitialized = new BookEntity();
    Object.assign(newBookInitialized, book);

    const newBook = this.bookRepo.save(newBookInitialized);
    Object.assign(newBook, { author });

    return newBook;
  }

  async getBooksByAuthor(authorId: number): Promise<BookEntity[]> {
    return this.bookRepo.find({ where: { author: { id: authorId } } });
  }

  async getBookAuthor(bookId: number): Promise<BookEntity> {
    return this.bookRepo.findOne({ where: { id: bookId } });
  }
}
